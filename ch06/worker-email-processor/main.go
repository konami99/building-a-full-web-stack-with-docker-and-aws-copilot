package main

import (
	"fmt"
	"github.com/aws/aws-sdk-go/aws"
	"github.com/aws/aws-sdk-go/aws/session"
	"github.com/aws/aws-sdk-go/service/sqs"
	"time"
	"os"
)

func GetQueueURL(sess *session.Session, queue string) (*sqs.GetQueueUrlOutput, error) {
	sqsClient := sqs.New(sess)

	result, err := sqsClient.GetQueueUrl(&sqs.GetQueueUrlInput{
		QueueName: &queue,
	})

	if err != nil {
		return nil, err
	}

	return result, nil
}

func main() {
	for {
		// export SQS_ENDPOINT=http://localhost:4566
		// export AWS_REGION=us-west-2
		// export COPILOT_QUEUE_URI=http://localstack:4566/000000000000/emailEventsQueue
		sess, err := session.NewSession(&aws.Config{
			Region: aws.String(os.Getenv("AWS_REGION")),
			Endpoint: aws.String(os.Getenv("SQS_ENDPOINT")),
		})

	
		if err != nil {
			fmt.Printf("Failed to initialize new session: %v", err)
			return
		}
	
		sqsClient := sqs.New(sess)
	
		var timeout int64 = 5
	
		msgResult, err := sqsClient.ReceiveMessage(&sqs.ReceiveMessageInput{
			AttributeNames: []*string{
				aws.String(sqs.MessageSystemAttributeNameSentTimestamp),
			},
			MessageAttributeNames: []*string{
				aws.String(sqs.QueueAttributeNameAll),
			},
			QueueUrl:            aws.String(os.Getenv("COPILOT_QUEUE_URI")),
			MaxNumberOfMessages: aws.Int64(1),
			VisibilityTimeout:   &timeout,
		})

		messages := msgResult.Messages
		if len(messages) > 0 {
			handle := msgResult.Messages[0].ReceiptHandle
			body := msgResult.Messages[0].Body
			fmt.Println("Message Handle: " + *handle)
			fmt.Println("Message Body: " + *body)
			
			sqsClient.DeleteMessage(&sqs.DeleteMessageInput{
				QueueUrl:      aws.String(os.Getenv("COPILOT_QUEUE_URI")),
				ReceiptHandle: handle,
			})

			time.Sleep(2 * time.Second)
		} else {
			fmt.Println("No message")
			time.Sleep(2 * time.Second)
		}
	}
}
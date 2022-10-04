import { Request, Response } from "express";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";

export async function emailHandler(
  req: Request,
  res: Response,
) {
  const client = new SNSClient({
    region: "us-west-2",
    endpoint: process.env.SNS_TOPIC_ENDPOINT,
  });

  const { emailEvents } = JSON.parse(process.env.COPILOT_SNS_TOPIC_ARNS as string);
  console.log(emailEvents);

  const out = await client.send(new PublishCommand({
    Message: "sending message",
    TopicArn: emailEvents,
  }));
  
  return res.status(200).send();
}
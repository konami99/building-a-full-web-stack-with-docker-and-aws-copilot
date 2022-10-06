# [Building a full Web-Stack with Docker and AWS Copilot](https://leanpub.com/building-a-full-web-stack-with-docker-and-aws-copilot)
 
This is the source code for my Leanpub book *Building a full Web-Stack with Docker and AWS Copilot*.

Put these environment variables in your express and nextjs folder, so you can run them locally:

express/.env
```
PORT=3003
FRONTEND_HOST=*
AWS_REGION=us-west-2
DB_URI=http://dynamodb-local:8000
COPILOT_SNS_TOPIC_ARNS={"emailEvents":"arn:aws:sns:us-west-2:000000000000:emailEvents"}
AWS_ACCESS_KEY_ID=local
AWS_SECRET_ACCESS_KEY=local
SNS_TOPIC_ENDPOINT=http://localstack:4566
```
nextjs/.env
```
NEXT_PUBLIC_EXPRESS_ENDPOINT=http://localhost:3003
```

## Cover Art

![emma-raphael-ttS--i2y9Bo-unsplash(3)](https://user-images.githubusercontent.com/166879/194287913-57936a1d-bab8-47a6-b2d7-373fcaf8208d.jpg)

Photo by [Emma Raphael](https://unsplash.com/@bavariansojourn?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
  

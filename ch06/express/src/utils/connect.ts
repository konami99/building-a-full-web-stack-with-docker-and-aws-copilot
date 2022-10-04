import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

async function connect() {
  try {
    console.log('DB connected');
    const client = new DynamoDBClient({
      region: process.env.AWS_REGION as string,
    });
    const dbDocClient = DynamoDBDocumentClient.from(client);
  } catch (error) {
    console.log(`Could not connect to DB: ${error}`);
    process.exit(1);
  }
}

export default connect;
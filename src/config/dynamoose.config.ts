import * as dynamoose from "dynamoose";
import { DynamoDB } from '@aws-sdk/client-dynamodb';

const dynamodbClient = new DynamoDB({
    region: "us-east-1",
  credentials: {
    accessKeyId: "AKIAYDYCMARVQBD334O6",
    secretAccessKey: "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",},
});

dynamoose.aws.ddb.set(dynamodbClient);

export { dynamodbClient };
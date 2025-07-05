# Lambda Exam Tips (dev)

- `Lambda triggers`: be aware of the services that can trigger a lambda function
- `Serverless Technology`: Lambda, API Gateway, DynamoDB, S3, SNS, SQS
- `Independent`: Lambda functions are independent, each event will trigger a single function
- `Extremely Cost Effective`: Pay only when your code executes
- `Continuous Scaling`: Lambda scales automatically
- `Event-Driven`: Lambda functions are triggered by an event of action

## Versioning

- `$LATEST` tag refers to the latest uploaded Lambda code
- You can use versioning an aliasing to point your applications to specific version if you don't want to use $LATEST
- If you use alias instead of $LATEST, it will not use the lastest code automatically
- If no alias is specific at the end of the ARN, then it will use $LATEST
- ARN example
  - `arn:aws:lambda:us-west-2:123456789012:function:my-function:Prod`
  - `arn:aws:lambda:us-west-2:123456789012:function:my-function:$LATEST`

## Concurrent Execution Limits

- The limit is of `1,000 concurrent executions per second`
- It's likely that you hit the limit at some point
- If you hit the limit you'll see a `429 HTTP` response
- You can get the limit raised by the `AWS support`
- `Reserved concurrency` guarantees that a set number of concurrent executions are always available for critical functions

## VPC Access

- It's possible to enable the Lambda to access resources that are under a private `VPC`
- In order to access a private VPC, it needs `VPC ID`, `private subnet ID`, `security group ID`
- Lambda create `ENIs (Elastic Network Instance)` using IPs from the `private subnets`
- The `security group` allows your function to access resources under the VPC

## Storage Patterns

|                  | `/tmp` Ephemeral Storage | Lambda Layer                  | S3 (external)          | EFS (external)       |
| ---------------- | ------------------------ | ----------------------------- | ---------------------- | -------------------- |
| Use Case:        | `Temporary` data         | `Libraries` and `SDKs`        | `Persistent` data      | `Persistent` data    |
| Size Limit:      | 512 MB - 10 GB           | 50 MB zipped - 250 MB zipped  | Elastic                | Elastic              |
| Dynamic Updates: | `Dynamic` read/write     | Updates require a `new` layer | `Store` and `retrieve` | `Dynamic` read/write |
| Shared:          | Shared `within` the EE   | Shared `accross` EEs          | Shared `accross` EEs   | Shared `accross` EEs |

EE = Execution Environment

## Deployment package

- The deployment package is created by default is you use the console
- Deployment packages that are larger the `50 MB` in size must be zipped and `uploaded to S3`
- You can use `Lambda Layer` is best practice to reduce the size of the deployment package

## Performance Tuning

- Increase the memory can reduce the execution time
- Importing library can slow down the initialization of your function
- Only import what you need to use (es. import `aws-cdk/clients/dynamodb` instead of `aws-cdk`)

# Lambda

<aws-icon icon="lambda"></aws-icon>

Run code in AWS without provisioning any servers.

You are charged based on the `number of requests`, `their duration`, and the `amount of memory` used by your Lambda.

| Charged for | Cost                                       | Note                                                     |
| ----------- | ------------------------------------------ | -------------------------------------------------------- |
| Requests    | `$0.20 per month` per `1 million requests` | The first `1 milion` requests per months are `for free`  |
| Duration    | `$0.00001667` per `GB-second`              | The first `400,000 GB-seconds` per months are `for free` |

## Versioning

You can manage multiple versions of lambda functions using aliases, and use `$LATEST` to reference the latest one.

## Concurrent Executions

There is a limit of lambdas that can run on the same time on the same region: `1,000 per region`. You can improve the limit by subitting a request to the AWS Support Center.

You can also reserve some concurrent executions for some critical functions.

## Execution Environment

![lambda execution environment](/images/execution-env-lambda.png)

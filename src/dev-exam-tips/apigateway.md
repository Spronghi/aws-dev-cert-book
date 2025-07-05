# API Gateway Exam Tips (dev)

- It's the `front door` of your application by providing a endpoint for your application running in AWS
- It's `serverless`, so it's low cost and scales automatically
- It supports `throttling`, so it prevents your application on being overloaded with too many requests
- Everything is logged into `CloudWatch`, such as API calls, latency and errors

## Response and request transformation

- API Gateway can transform `HTTP` requests and responses using `parameter mapping`
- Change the header, query string, or request path of an API `request`
- Change the header or a status code of a API `response`

## Caching

- API Gateway improve performance by caching output of the API
- By default the TTL of the cache is 300 seconds (5 minutes)
- Reduce the number of calls you receive by serving the cache instead

## Throttling

- API Gateway use throttling to prevent your backend to be overwhelmed with too many requests
- Default limit is `10,000 rps` and `5,000 concurrent requests`
- If you exceed the limit, API Gateway will return `429, Too Many Requests`

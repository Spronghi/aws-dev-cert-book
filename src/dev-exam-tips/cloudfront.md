# CloudFront Exam Tips (dev)

- `CloudFront Origin`: this is the origin of all the files that the distribution will serve. This can be a S3 bucket, a EC2 instance, an Elastic Load Balancer, or Route53
- `CloudFront Distribution`: this is the name given to the Origin and configuration settings for the content you wish to distribute using CloudFront (CloudFront Delivery Network - CDN)
- `Edge Locations`: this is the location where content is `cached`. It is not the same of `AWS Region/AZ`
- `S3 Transfer Accelleration`: CloudFront Edge Locations are utilized by S3 to Transfer Accelleration to reduce latency for S3 uploads

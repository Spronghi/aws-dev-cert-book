# CloudFront (CDN)

<aws-icon icon="cloudfront"></aws-icon>

A system of distributed servers which deliver webpages and other web content.

It's used to improve the performance of the delivery of a website from all the users around the world.

## Cache

`Edge Locations` is a collection of services which are in geographically disposed data centers. The default `Time to Live (TTL)` is on 1 day, then the object is cleared from the cache (you'll be charged if you clear the cache yourself).

This edge locations are used by cloudfront to make cache of copies of your objects. So people that are far away from your server, can access your content from a closer distance.

The closest edge location get the request, forward it to the CloudFront Distribution and then it caches locally.

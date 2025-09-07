# Simple Queue Service

<aws-icon icon="sqs"></aws-icon>

It's a queue service, the oldest service of AWS.

Messages can contain up to `256 KB` of text in any format.

The minimum retemption period is `one minute` and the maximum is `14 days`, while the default is `4 days`.

## Standard queue

It's the default queue.

It gives nearly unlimited number of transactions per second.

Guarantees that the message is delivered `at least once`.

Provide best-effort ordering, so delivered in the same order they are received.

It may introduce `duplicates`.

## FIFO queue

The order in which messages are sent and received is strictly preserved.

A message is delivered once and it remains available until a consumer processes it and deletes it.

No `duplicates`.

## Visibility timeout

When a message is first picked up from a service, the message become invisibile for a certain amount of time (`Visibility Timeout`).

The default is `30 seconds` to a maximum of 12 hours.

It's preferable to use `long polling` instead of `short polling` cause the second one bills you even if the responses of the queue poll are empty, while the `long polling` doesn't.

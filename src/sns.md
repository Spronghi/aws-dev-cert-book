# Simple Notification Service (SNS)

Used to send notifications to devices or trigger lambdas.

It uses a `sub/pub` model:

- applications can `PUBLISH` or `PUSH` messages to a `TOPIC`;
- subscribers can `RECEIVE` messages from a `TOPIC`.

![sns benefits](../screenshots/dev-cert/sns-benefits.png)

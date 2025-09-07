# SQS Exam Tips (dev)

Distributed message queueing system.

It allows us to decouple different part of your application so they are independent.

It's a `pull based` system.

## Queue types

| Standard                         | FIFO                                                                                      |
| -------------------------------- | ----------------------------------------------------------------------------------------- |
| Best-effort ordering.            | First-in-first-out message order is strictly preserved.                                   |
| Message delivered at least once. | Messages are delivered once.                                                              |
| Occasional duplicates.           | No duplicates.                                                                            |
| The default queue type.          | Good for certain scenarios where is important to deliver messages only once and in order. |

## Visibility Timeout

The default is `30 seconds` to a maximum of 12 hours.

Chose `Long Polling` always against `Short Polling` cause it saves money when polling an empty queues.

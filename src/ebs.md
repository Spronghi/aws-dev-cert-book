# Elastic Block Store

<aws-icon icon="ebs"></aws-icon>

`Highly available` and `scalable` storage volumes you can attach to EC2 instances.

- **Production Workloads**: designed for critical workloads;
- **Highly Available**: automatically replicated withing a single availability zone;
- **Scalable**: dynamically increase capacity and change the type volume with no downtime or performance impact.

## General Purpose SSD - gp2 or gp3

A **reasonable price for a reasonable performance**.

Suitable for `boot disks` and `general applications`.

| gp2                            | gp3                                    |
| ------------------------------ | -------------------------------------- |
| 3 IOPS/GiB                     | Baseline of 3,000 IOPS for all volumes |
| Up to `16,000 IOPS` per volume | Up to `16,000 IOPS` per volume         |
| Up to 99.9% durability         | Up to 99.9% durability                 |

## Provisioned IOPS SSD - io1 and io2

The **high performance** and also the **most expensive**.

Suitable for `OLTP` (Online Transaction Processing) and `latency-sensitive` applications.

| io1                            | io2                            | io2 Block Express                           |
| ------------------------------ | ------------------------------ | ------------------------------------------- |
| 50 IOPS/GiB                    | 500 IOPS/GiB                   | -                                           |
| Up to `64,000 IOPS` per volume | Up to `64,000 IOPS` per volume | Up to 64TB. Up to `256,000 IOPS` per volume |
| Up to 99.9% durability         | 99.999% durability             | 99.999% durability                          |

## Throughtput Optimized HDD - st1

This is not a SSD, it's an hard disk and it's optimized for **large amounts of data**.

Great for big data, databases, data warehouses, ETL and log processing.

Max throughtput of `500 MB/s per volume`.

It cannot be a **boot volume**.

## Cold HDD (sc1)

The **lowest cost** data available.

A good option for data that need to be accessed few times per day.

Max throughtput of `250 MB/s per volume`.

It cannot be a **boot volume**.

## IOPS vs Throughtput

| IOPS                                                      | Throughtput                                                           |
| --------------------------------------------------------- | --------------------------------------------------------------------- |
| I/O operations per seconds                                | Number of bits read or written per seconds                            |
| Important metric for quick transactions, low latency apps | Important metric for large databases, large I/O size, complex queries |
| The ability to read and write very quickly                | The ability to deal with large datasets                               |
| `Provisioned IOPS SSD (io1 or io2)`                       | `Choose Throughtput Optimized HDD (st1)`                              |

## Resources

- [AWS Volume Type Docs](https://aws.amazon.com/ebs/volume-types/)

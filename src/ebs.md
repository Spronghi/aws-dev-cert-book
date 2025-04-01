# Elastic Block Store

<svg style="width:40px" xmlns="http://www.w3.org/2000/svg" height="40" width="40" viewBox="0 0 80 80"><linearGradient id="a" x1="0%" y1="100%" y2="0%"><stop offset="0" stop-color="#1b660f"/><stop offset="1" stop-color="#6cae3e"/></linearGradient><g fill="none" fill-rule="evenodd"><path d="M0 0h80v80H0z" fill="url(#a)"/><path d="M66 58h2v10H58v-2h6.586l-8.293-8.293 1.414-1.414L66 64.586zm-42.293-.293L15.414 66H22v2H12V58h2v6.586l8.293-8.293zM68 12v10h-2v-6.586l-8.293 8.293-1.414-1.414L64.586 14H58v-2zm-52.586 2l8.293 8.293-1.414 1.414L14 15.414V22h-2V12h10v2zm35.264 39.661c-1.157 1.187-5.043 2.385-11.115 2.385C32.168 56.046 28.031 54.23 28 53V29.857C30.603 31.395 35.32 32 39.563 32c4.193 0 8.855-.603 11.437-2.133v23.158c.002.074.008.298-.322.636zM39.563 24c6.1 0 9.982 1.181 11.123 2.352.322.33.316.55.314.623V27c0 1.226-4.073 3-11.437 3-7.141 0-11.531-1.735-11.56-2.987.058-1.267 4.09-3.013 11.56-3.013zm13.436 3c.008-.518-.141-1.284-.881-2.044C50.313 23.105 45.62 22 39.563 22 33.365 22 26.094 23.303 26 27v26.025c.095 3.706 7.365 5.021 13.563 5.021 4.657 0 10.399-.785 12.547-2.989.759-.779.903-1.562.89-2.057V27z" fill="#fff"/></g></svg>

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

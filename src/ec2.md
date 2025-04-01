# Elastic Compute Cloud

<svg class="w-6 h-6" height="40" width="40" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="Arch_Amazon-EC2_32_svg__a"><stop stop-color="#C8511B" offset="0%"></stop><stop stop-color="#F90" offset="100%"></stop></linearGradient></defs><g fill="none" fill-rule="evenodd"><path d="M0 0h40v40H0z" fill="url(#Arch_Amazon-EC2_32_svg__a)"></path><path d="M26.052 27L26 13.948 13 14v13.052L26.052 27zM27 14h2v1h-2v2h2v1h-2v2h2v1h-2v2h2v1h-2v2h2v1h-2v.052a.95.95 0 01-.948.948H26v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-2v2h-1v-2h-.052a.95.95 0 01-.948-.948V27h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-2h-2v-1h2v-.052a.95.95 0 01.948-.948H13v-2h1v2h2v-2h1v2h2v-2h1v2h2v-2h1v2h2v-2h1v2h.052a.95.95 0 01.948.948V14zm-6 19H7V19h2v-1H7.062C6.477 18 6 18.477 6 19.062v13.876C6 33.523 6.477 34 7.062 34h13.877c.585 0 1.061-.477 1.061-1.062V31h-1v2zM34 7.062v13.876c0 .585-.476 1.062-1.061 1.062H30v-1h3V7H19v3h-1V7.062C18 6.477 18.477 6 19.062 6h13.877C33.524 6 34 6.477 34 7.062z" fill="#FFF"></path></g></svg>

Secure, resizable compute capacity in the Cloud. Is like a `VM` that is hosted on AWS instead of your own data center.

## Pricing Options

- **On Demand**: pay only for the time you are running;
- **Reserved**: reserve capacity for one or three years. Up to 72% discount;
- **Spot**: purchase unused capacity at a massive discount. You decide a price for each instance based on the demand, and when it goes higher the instance get killed;
- **Dedicated**: phisical server running EC2 instances only for you. The most expensive options.

### On Deman

Super flexible, perfect for first time in the cloud or normal applications.

### Reserved Instances

There are three types of reservations:

1. **Standard RIs**: up to 72% off on-demand price. You cannot change to larger or smaller instances types;
2. **Convertible RIs**: up to 54% off on-demand price. You can decide to change the instances type of equal or greater value;
3. **Scheduled RIs**: schedule the reservations between a window of time of the day, week or month.

### Spot Instances

This are perfect for application that need to have a very `low compute prices` or applications that need a `large amount` of additional computing capacity.

### Dedicated

Great for meeting regolatory requirements that do not support multi-tenant virtualization.

1. **On-Demand**: can be purchase on a hourly rate;
2. **Reserved**: can be purchase at a reservation to up to 72% off the on-demand price.

## Instance Types

Determinates the hardware of the host computer. Each instance type offers different compute memory, and storage capabilities.

There is a wide selection of instance types, based on the requirements of the application and hardware needed.

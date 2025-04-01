# Identity Access Manager

<svg style="width:40px" viewBox="-117 0 490 490" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M21,165.75 L0,172.606 L21.75,175.125 L21,165.75" fill="#3C4929"> </path> <path d="M19.955,206.806 L128,213.714 L236.045,206.806 L128,185.75 L19.955,206.806" fill="#3C4929"> </path> <path d="M234.5,175.125 L256,172.606 L234.5,166.875 L234.5,175.125" fill="#3C4929"> </path> <path d="M157.387,352.929 L213.993,366.325 L157.237,383.441 L157.387,352.929" fill="#B7CA9D"> </path> <path d="M19.955,92.221 L19.955,54.019 L128,0 L128.482,0.405 L128.234,48.901 L128,49.003 L127.595,50.12 L68.497,73.976 L67.955,158.013 L99.407,152.723 L128,147.002 L128,490.03 L95.631,473.853 L95.631,428.082 L67.277,416.744 L67.277,202.069 L19.955,206.806 L19.955,168.611 L0,172.606 L0,100.198 L19.955,92.221" fill="#4B612C"> </path> <path d="M99.408,152.727 L67.277,159.151 L67.277,73.28 L99.408,83.298 L99.408,152.727" fill="#759C3E"> </path> <path d="M183.925,27.959 L236.031,54.019 L236.031,92.221 L256,100.198 L256,172.6 L236.031,168.611 L236.031,206.806 L210.59,204.268 L188.709,202.069 L188.709,245.008 L236.045,245.008 L236.045,284.292 L214.048,286.266 L214.048,325.877 L160.356,336.549 L160.356,382.319 L213.926,366.42 L214.048,406.8 L160.356,428.082 L160.356,473.853 L128,490.03 L128,147.002 L156.572,152.712 L187.155,156.75 L187.155,73.966 L128.817,51.468 L128,49.003 L128,0 L183.925,27.959" fill="#759C3E"> </path> <path d="M160.356,61.941 L128,49.01 L67.277,73.28 L99.408,83.298 L160.356,61.941" fill="#3C4929"> </path> <path d="M67.277,73.28 L128,49.01 L140.775,54.114 L160.356,61.941 L188.709,73.294 L187.194,74.835 L158.318,83.826 L156.578,83.298 L128,73.28 L99.408,83.298 L67.277,73.28" fill="#3C4929"> </path> <path d="M156.578,83.298 L188.709,73.294 L188.709,159.158 L156.578,152.712 L156.578,83.298" fill="#4B612C"> </path> </g> </g></svg>

It consists of applying `Policies` to `Users`, `Groups` and `Roles`. IAM is _universal_, not _regional_.

The root account is created whe you first create the AWS account. It has admin access to the entire account, so it's a good practice to create a different IAM user for day to day activities. Remember to alwasy setup `MFA` to your root account. From here you can setup a rotaion period for the password on your own account.

## Policies

A JSON document which defines one or more permissions.

Policies are the rules that will determine if someone can access a given resource.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "*",
      "Resource": "*"
    }
  ]
}
```

## Users

End users of AWS. New `Users` have no permissions by default. You need to assign them roles in order to be able to access resources

### Access Keys

New users are assigned a `access key ID` and `secret access key` when their account is created. You can access them only while creating the account, if you want to see them again, you must regenerate them.

These keys are not the same of _username_ and _password_, you can't use them to access the user, you can use them only to access the _AWS APIs_ and _command line_.

## Groups

Allow you to group users applying `Policies`.

## Roles

Create roles and then assign them to `Users`, `Applications` or `Services` to grant them permission to access AWS resources.

## Questions

> Which IAM entity can you use to delegate access to other trusted entities such as IAM users, applications, or AWS services like EC2?
>
> - [ ] IAM Web Identity Federation
> - [x] IAM Role
> - [ ] IAM Group
> - [ ] IAM User
>
> You can use IAM roles to delegate access to IAM users managed within your account, to IAM users under a different AWS account, to a web service offered by AWS such as Amazon Elastic Compute Cloud (Amazon EC2), or to an external user authenticated by an external identity provider (IdP) service that is compatible with SAML 2.0 or OpenID Connect, or a custom-built identity broker. IAM Roles.

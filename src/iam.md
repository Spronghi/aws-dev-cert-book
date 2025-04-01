# Identity Access Manager

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

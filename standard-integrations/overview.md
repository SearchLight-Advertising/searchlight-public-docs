# Standard Integrations Overview

This document covers the shared setup requirements for standard SearchLight integrations.

## Available Integrations

- [CRM Ingestion](crm.md)
- [Lead Ingestion](leads.md)

---

## S3 Delivery Requirements

All integrations deliver data via an S3 bucket that you create and grant SearchLight read access to.

### Bucket Setup

Create an S3 bucket with an IAM role granting SearchLight the following permissions:

- `s3:GetObject`
- `s3:ListBucket`

Grant bucket level access to the following SearchLight IAM role:

```
arn:aws:iam::362365826974:role/sl-lambda-role
```

### File Format

Files must be gzipped JSON arrays (`.json.gz`) containing records that match the schema for the relevant integration.

### Sync Frequency

The bucket should be updated with the latest data at least once every 24 hours if possible.

---

## After Setup

Send the following details to [leo@searchlightdigital.io](mailto:leo@searchlightdigital.io):

- The S3 bucket name
- The ARN of a role that SearchLight can assume with read access (`s3:GetObject`, `s3:ListBucket`)

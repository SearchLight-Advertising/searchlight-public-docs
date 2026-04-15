# CRM Activity

This document defines the schema and bucket structure for CRM integrations with SearchLight. For S3 setup, file format, and access steps see the [overview](overview.md).

## Bucket Key Structure

```
/standard-crm/[customer|estimate|job]/{account}/{YYYY-MM-DD}/{filename}.json.gz
```

Example: `standard-crm/job/example-plumber/2026-02-19/jobs_bort.json.gz`

---

## Schema

### Customer

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `id` | string | required | Unique identifier for the customer in the source CRM | `"cus-472-83910"` |
| `name` | string | required | Full name of the customer | `"Jane Smith"` |
| `created_date` | string (ISO 8601) | required | Date/time the customer record was created | `"2026-01-05T08:30:00Z"` |
| `address` | string | optional | Street address of the customer | `"123 Main St"` |
| `zip` | string | optional | Postal/ZIP code | `"75201"` |
| `phones` | string[] | optional | Array of phone numbers associated with the customer | `["214-555-0101"]` |
| `emails` | string[] | optional | Array of email addresses associated with the customer | `["jane@example.com"]` |

### Estimate

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `id` | string | required | Unique identifier for the estimate in the source CRM | `"est-001"` |
| `customer_id` | string | required | Reference to the associated customer record | `"cus-472-83910"` |
| `created_date` | string (ISO 8601) | required | Date/time the estimate was created | `"2026-02-19T10:00:00Z"` |
| `total` | number | required | Estimated dollar value of the job | `1850.00` |
| `status` | string | required | Current status of the estimate (e.g. Accepted, Rejected). Used to derive `is_sold` | `"Accepted"` |
| `sold_date` | string (ISO 8601) | optional | Date/time the estimate was accepted. Present only when status indicates sold | `"2026-02-20T14:00:00Z"` |
| `business_unit` | string | optional | Business unit or trade category | `"HVAC"` |
| `job_type` | string | optional | Type or category of the job | `"Repair"` |
| `campaign` | string | optional | Marketing campaign attributed to this estimate | `"Spring Promo 2026"` |
| `technician` | string | optional | Name of the assigned technician or sales rep | `"Bob Torres"` |

### Job

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `id` | string | required | Unique identifier for the job in the source CRM | `"job-8821"` |
| `customer_id` | string | required | Reference to the associated customer record | `"cus-472-83910"` |
| `created_date` | string (ISO 8601) | required | Date/time the job was created | `"2026-02-19T10:00:00Z"` |
| `status` | string | required | Current status of the job. Used to derive `is_completed` and `is_canceled` | `"Completed"` |
| `revenue` | number | required | Final sold/invoiced value of the job | `2200.00` |
| `scheduled_date` | string (ISO 8601) | optional | Date/time the job was or is scheduled | `"2026-02-21T09:00:00Z"` |
| `completed_date` | string (ISO 8601) | optional | Date/time the job was closed. Used alongside `status` to derive `is_completed` | `"2026-02-21T16:30:00Z"` |
| `business_unit` | string | optional | Business unit or trade category | `"Plumbing"` |
| `job_type` | string | optional | Type or category of the job | `"Installation"` |
| `cancel_reason` | string | optional | Reason the job was canceled. Present only when status indicates cancellation | `"Customer request"` |
| `cancel_note` | string | optional | Free-text note about the cancellation | `"Called to reschedule, did not follow up"` |
| `campaign` | string | optional | Marketing campaign attributed to this job | `"Spring Promo 2026"` |
| `technician` | string | optional | Name of the assigned technician or sales rep | `"Bob Torres"` |

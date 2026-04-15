# Widget and Form Leads 

This document defines the schema and bucket structure for lead integrations with SearchLight. For S3 setup, file format, and access steps see the [overview](overview.md).

## Bucket Key Structure

```
/standard-lead/{account}/{YYYY-MM-DD}/{filename}.json.gz
```

Example: `standard-lead/example-plumber/2026-02-19/leads_bort.json.gz`

---

## Schema

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `id` | string | required | Must be unique per conversion per account | `"12345"` |
| `datetime` | string (ISO 8601) | required | Timestamp in UTC | `"2026-02-19T16:47:48.577Z"` |
| `type` | string | required | Type of lead conversion | `"chat"`, `"form"`, `"call"` |
| `phone_number` | string | required | Customer phone number with area code | `"123-456-7891"` |
| `customer_name` | string | required | Full name of the customer | `"John Doe"` |
| `email` | string | required | Customer email address | `"example@email.com"` |
| `content` | string | required | Plain text transcript or form content. Newlines allowed | `"Need a new furnace\nNo problem"` |
| `referrer_url` | string | required | Full referrer URL as received | `"https://www.google.com/"` |
| `landing_page_url` | string | required | Full landing page URL as received | `"https://exampleplumber.com/?gclid=..."` |
| `address` | string | optional | Customer address | `"123 Main St, Austin, Texas"` |
| `zipcode` | number | optional | Customer ZIP code | `12345` |
| `agent` | string | optional | Name or identifier of the agent or CSR | `"John Doe"` |
| `cost` | float | optional | Cost of the lead if applicable | `27.34` |

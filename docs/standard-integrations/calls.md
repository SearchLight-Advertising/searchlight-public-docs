# Call Leads

This document defines the schema and bucket structure for call tracking integrations with SearchLight. For S3 setup, file format, and access steps see the [overview](./overview).

## Bucket Key Structure

```
/standard-call/{account}/{YYYY-MM-DD}/{filename}.json.gz
```

Example: `standard-call/example-plumber/2026-02-19/calls_bort.json.gz`

---

## Schema

| Field | Type | Required | Description | Example |
| --- | --- | --- | --- | --- |
| `id` | string | required | Must be unique per conversion per account | `"12345"` |
| `datetime` | string (ISO 8601) | required | Timestamp in UTC | `"2026-02-19T16:47:48.577Z"` |
| `from_number` | string | required | Customer phone number with area code | `"123-456-7891"` |
| `to_number` | string | required | Dialed phone number with area code | `"123-456-7891"` |
| `call_duration_seconds` | number | required | Duration of the call in seconds | `184` |
| `recording_url` | string | required | URL of the call recording | `"https://www.calltracking.com/recording/10"` |
| `referrer_url` | string | required | Full referrer URL as received | `"https://www.google.com/"` |
| `landing_page_url` | string | required | Full landing page URL as received | `"https://exampleplumber.com/?gclid=..."` |
| `tracking_name` | string | required | Call tracking campaign name | `"ppc hvac campaign"` |
| `transcript` | string | optional | Plain text transcript of the call. Newlines allowed | `"Hello, thanks for calling\n..."` |
| `email` | string | optional | Customer email address | `"example@email.com"` |
| `address` | string | optional | Customer address | `"123 Main St, Austin, Texas"` |
| `zipcode` | number | optional | Customer ZIP code | `12345` |
| `agent` | string | optional | Name or identifier of the agent or CSR | `"John Doe"` |

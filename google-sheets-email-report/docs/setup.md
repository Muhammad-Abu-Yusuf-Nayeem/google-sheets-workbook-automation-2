# Setup Guide

## 1. Create or Open a Google Sheet

Open the Google Sheet containing the data you want to email.

Make sure the report exists in a dedicated tab, for example:

```text
Daily Report
```

## 2. Open Apps Script

From Google Sheets:

```text
Extensions → Apps Script
```

## 3. Add the Script

Copy the code from:

```text
src/sendReportEmail.gs
```

into the Apps Script editor.

## 4. Configure the Settings

At the top of the script, update:

```javascript
const recipient = "YOUR_EMAIL@example.com";
const tabName = "Daily Report";
const reportRange = "B2:E6";
```

### Example

```javascript
const recipient = "manager@example.com";
const tabName = "Daily Report";
const reportRange = "B2:E10";
```

## 5. Save and Run

Save the Apps Script project.

Select:

```text
sendReportEmail
```

and click **Run**.

Google may ask you to authorize the script during the first execution.

## 6. Verify the Result

Check the recipient's inbox.

The selected Google Sheets range should appear as a formatted HTML table inside the email.

## Troubleshooting

### Sheet Not Found

If you receive:

```text
Sheet "Daily Report" was not found.
```

check that the value of:

```javascript
const tabName = "Daily Report";
```

exactly matches the Google Sheets tab name.

Sheet names are case-sensitive.

### Wrong Data

Check:

```javascript
const reportRange = "B2:E6";
```

and make sure it covers the intended report area.

### No Email Received

Check:

* Recipient email address
* Spam/Junk folder
* Apps Script execution history
* Google authorization
* Email sending limits

## Security

Do not publish personal email addresses, API keys, passwords, tokens, or other private credentials in the repository.

Use placeholders such as:

```javascript
const recipient = "YOUR_EMAIL@example.com";
```

# Google Sheets Email Report Automation

A simple Google Apps Script automation that reads a selected range from Google Sheets, converts the data into a formatted HTML table, and sends the report by email.

## Overview

This project demonstrates how to automate a common reporting workflow:

```text
Google Sheets
     │
     ▼
Read selected sheet & range
     │
     ▼
Convert data to HTML table
     │
     ▼
Build HTML email
     │
     ▼
Send report using MailApp
     │
     ▼
Recipient's Email
```

Instead of manually copying a report from Google Sheets into an email, the script generates and sends the report automatically.

## Features

* Read data from a specific Google Sheets tab
* Select a specific cell range for the report
* Preserve displayed values using `getDisplayValues()`
* Generate a formatted HTML table
* Automatically style the first row as a header
* Send the report using Google Apps Script `MailApp`
* Include the active user's email in the signature
* Validate whether the requested sheet exists
* Escape cell content before inserting it into HTML

## Project Structure

```text
google-sheets-email-report/
│
├── README.md
├── LICENSE
├── .gitignore
│
├── src/
│   └── sendReportEmail.gs
│
├── docs/
│   └── setup.md
│
└── screenshots/
    └── email-report.png
```

## Requirements

* A Google account
* Google Sheets
* Google Apps Script
* Permission to send email from the Google account running the script

No external libraries are required.

## Configuration

Open:

```text
src/sendReportEmail.gs
```

Change the following settings:

```javascript
const recipient = "YOUR_EMAIL@example.com";
const tabName = "Daily Report";
const reportRange = "B2:E6";
```

### Recipient

The email address that should receive the report:

```javascript
const recipient = "YOUR_EMAIL@example.com";
```

### Sheet Tab

The exact name of the Google Sheets tab:

```javascript
const tabName = "Daily Report";
```

For example:

```javascript
const tabName = "Sales Report";
```

### Report Range

The range that will be included in the email:

```javascript
const reportRange = "B2:E6";
```

For example:

```javascript
const reportRange = "A1:H20";
```

## Setup

### 1. Open Google Sheets

Open the spreadsheet containing the report.

### 2. Open Apps Script

Go to:

```text
Extensions → Apps Script
```

### 3. Add the script

Copy the contents of:

```text
src/sendReportEmail.gs
```

into the Apps Script editor.

### 4. Configure the script

Update:

```javascript
const recipient = "YOUR_EMAIL@example.com";
const tabName = "Daily Report";
const reportRange = "B2:E6";
```

### 5. Save the project

Save the Apps Script project.

### 6. Run the function

Select:

```text
sendReportEmail
```

from the function selector and click **Run**.

The first execution will request authorization for the required Google services.

### 7. Check the email

After successful execution, the formatted report should arrive in the configured recipient's inbox.

## How It Works

The script first accesses the active spreadsheet:

```javascript
const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
```

It then finds the required sheet:

```javascript
const sheet = spreadsheet.getSheetByName(tabName);
```

The selected range is read using:

```javascript
const values = range.getDisplayValues();
```

`getDisplayValues()` is useful for reporting because it retrieves the values as displayed in the spreadsheet.

The script then loops through the rows and cells and constructs an HTML table:

```javascript
values.forEach((row, rowIndex) => {
  row.forEach(cell => {
    // Generate HTML table cells
  });
});
```

Finally, the HTML content is sent using:

```javascript
MailApp.sendEmail({
  to: recipient,
  subject: "Daily Report",
  htmlBody: htmlBody
});
```

## Example

Suppose the Google Sheet contains:

| Metric      |   Value | Status    |
| ----------- | ------: | --------- |
| Total Sales | 125,000 | Completed |
| Orders      |     348 | Completed |
| Pending     |      17 | Review    |

The script converts the selected range into an HTML table and sends it as an email report.

## Possible Improvements

This project can be extended with additional automation features, such as:

* Automatic daily email scheduling
* Multiple recipients
* CC/BCC support
* Dynamic report titles
* Conditional formatting
* Company branding
* Charts in email reports
* PDF report generation
* Multiple sheet reports
* Automatic date/time in the subject
* Error logging
* Trigger-based automation

## Learning Outcomes

This project demonstrates practical use of:

* Google Apps Script
* JavaScript
* Google Sheets services
* Spreadsheet range operations
* HTML generation
* HTML email formatting
* `MailApp`
* Error handling
* Basic data-to-email automation

## Use Cases

This approach can be useful for:

* Daily management reports
* Sales summaries
* Inventory reports
* Attendance reports
* Financial summaries
* Operational dashboards
* KPI reports
* Data quality reports

## License

This project is licensed under the MIT License.

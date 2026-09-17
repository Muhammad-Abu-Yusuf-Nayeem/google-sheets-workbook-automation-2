# Google Sheets Workbook Automation

Google Apps Script automation for managing selected Google Sheets across multiple workbooks.

This project demonstrates how to automate **sheet replication, replacement, and batch deletion** across multiple Google Spreadsheet workbooks using Google Apps Script.

---

## Overview

Managing the same sheets across multiple Google Spreadsheet workbooks manually can become repetitive and error-prone.

This project provides two automation workflows:

1. **Sheet Replication** — Copy selected sheets from one source workbook to multiple destination workbooks.
2. **Sheet Deletion** — Remove selected sheets from multiple destination workbooks in a single execution.

---

## Features

### Sheet Replication

- Uses one spreadsheet as the source.
- Targets multiple destination workbooks.
- Copies multiple selected sheets.
- Detects existing sheets with the same name.
- Deletes the existing version before copying.
- Preserves the original sheet name.
- Skips missing source sheets.

### Sheet Deletion

- Targets multiple destination workbooks.
- Checks for selected sheet names.
- Deletes matching sheets.
- Safely skips sheets that do not exist.

---

## Project Structure

```text
google-sheets-workbook-automation/
│
├── README.md
├── src/
│   ├── replicate-sheets.js
│   └── delete-sheets.js
│
└── .gitignore
```

## Requirements

* **Google Account**
* **Google Sheets**
* **Google Apps Script**
* **Access permission to all target workbooks**

*No external libraries or dependencies are required.*

---

## Configuration

The automation uses two main configuration arrays.

### Sheet Names

```javascript
var resourceKeys = [
  'Alice',
  'Bob',
  'John',
  'Anaya',
  'marin'
];
```

*Add or remove sheet names according to your requirement.*

### Destination Workbooks

```javascript
var endpointTokens = [
  'WORKBOOK_ID_1',
  'WORKBOOK_ID_2',
  'WORKBOOK_ID_3'
];
```

The values should be the Spreadsheet IDs of the destination workbooks.  
A Spreadsheet ID can be found in the Google Sheets URL:

```text
https://docs.google.com/spreadsheets/d/SPREADSHEET_ID/edit
```

---

## 1. Sheet Replication

The replication workflow copies selected sheets from the active source workbook into multiple destination workbooks.

### Workflow
```text
Source Workbook
      │
      ├── Sheet A
      ├── Sheet B
      ├── Sheet C
      │
      ▼
Destination Workbook 1
      │
      ├── Sheet A
      ├── Sheet B
      └── Sheet C

Destination Workbook 2
      │
      ├── Sheet A
      ├── Sheet B
      └── Sheet C

Destination Workbook 3
      │
      ├── Sheet A
      ├── Sheet B
      └── Sheet C
```

Before copying a sheet, the script checks whether a sheet with the same name already exists.  
If it exists:

```text
Existing Sheet
      ↓
    Delete
      ↓
Copy New Sheet
```

This prevents duplicate-sheet naming conflicts.

### Replication Logic
The core workflow is:

```text
Destination Workbook
        ↓
    Find Sheet
        ↓
  Does it exist?
   ┌────┴────┐
  Yes       No
   ↓         ↓
 Delete    Skip
   ↓
Copy Source Sheet
   ↓
Restore Sheet Name
```

---

## 2. Sheet Deletion

The deletion workflow removes selected sheets from all configured destination workbooks.

### Workflow
```text
Destination Workbook
        ↓
 Check Sheet Name
        ↓
Does Sheet Exist?
    ┌────┴────┐
   Yes       No
    ↓         ↓
 Delete    Skip
```

This allows multiple workbooks to be cleaned up with a single script execution.

---

## Important Safety Considerations

### 1. Deletion is permanent
`deleteSheet()` removes the sheet from the workbook.  
Always verify:
* **Workbook IDs**
* **Sheet names**
* **Target workbooks**

*before executing the deletion workflow.*

### 2. A spreadsheet must contain at least one sheet
Google Sheets does not allow a spreadsheet to have zero sheets.  
Therefore, attempting to delete the only remaining sheet in a workbook will cause the operation to fail.

### 3. Required permissions
The Google account executing the script must have sufficient access to the destination workbooks.  
The first execution may require authorization.

---

## Example Use Case

Suppose an organization maintains several project workbooks:
* Project Workbook 1
* Project Workbook 2
* Project Workbook 3
* Project Workbook 4
* Project Workbook 5

Each workbook contains the following sheets:
* Alice
* Bob
* John
* Anaya
* marin

Instead of manually updating or removing these sheets from every workbook, the automation can perform the operation centrally.

---

## Technologies

* **Google Apps Script**
* **JavaScript**
* **Google Sheets API** services provided through Apps Script

---

## Learning Outcomes

This project demonstrates practical concepts including:
* `SpreadsheetApp`
* `openById()`
* `getSheetByName()`
* `copyTo()`
* `deleteSheet()`
* Array iteration with `forEach()`
* Conditional existence checks
* Multi-workbook automation
* Batch spreadsheet operations
* Basic automation safety considerations

---

## Disclaimer
This project is intended for learning and automation purposes.  
Always test automation scripts on non-critical workbooks before applying them to production data.

---

**Author:** Yusuf  
*Data Analytics | Google Sheets Automation | Google Apps Script | JavaScript*


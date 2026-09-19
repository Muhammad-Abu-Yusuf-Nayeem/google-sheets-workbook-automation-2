function sendReportEmail() {

  // ==============================
  // SETTINGS
  // ==============================

  const recipient = "YOUR_EMAIL@example.com";
  const tabName = "Daily Report";
  const reportRange = "B2:E6";


  // ==============================
  // GET SHEET & DATA
  // ==============================

  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(tabName);

  if (!sheet) {
    throw new Error(`Sheet "${tabName}" was not found.`);
  }

  const range = sheet.getRange(reportRange);
  const values = range.getDisplayValues();


  // ==============================
  // CREATE HTML TABLE
  // ==============================

  let table = `
    <table style="
      border-collapse: collapse;
      font-family: Arial, sans-serif;
      font-size: 14px;
    ">
  `;

  values.forEach((row, rowIndex) => {

    table += "<tr>";

    row.forEach(cell => {

      table += `
        <td style="
          border: 1px solid #555;
          padding: 8px 18px;
          text-align: center;
          background-color: ${rowIndex === 0 ? "#d9edf7" : "#ffffff"};
        ">
          ${escapeHtml(cell)}
        </td>
      `;

    });

    table += "</tr>";
  });

  table += "</table>";


  // ==============================
  // EMAIL BODY
  // ==============================

  const htmlBody = `
    <div style="
      font-family: Arial, sans-serif;
      color: #222;
    ">

      <h2>Daily Report</h2>

      ${table}

      <p style="margin-top: 20px;">
        Regards,<br>
        ${Session.getActiveUser().getEmail()}
      </p>

    </div>
  `;


  // ==============================
  // SEND EMAIL
  // ==============================

  MailApp.sendEmail({
    to: recipient,
    subject: "Daily Report",
    htmlBody: htmlBody
  });
}


// ==============================
// HTML ESCAPE HELPER
// ==============================

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
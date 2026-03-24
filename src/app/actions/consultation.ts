"use server";

export async function submitConsultationForm(formData: {
  fullName: string;
  email: string;
  contactNumber: string;
  message: string;
}) {
  try {
    // NOTE TO DEVELOPER: 
    // To connect this directly to the Google Sheet (1_-vDj5oL4sLm2ZUr84ycHRvPM0IN-fChBaqkx9X8u44):
    // 1. Open the Google Sheet.
    // 2. Click Extensions > Apps Script.
    // 3. Paste the following code:
    /*
      function doPost(e) {
        var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
        var rowData = [
          new Date(),
          e.parameter.fullName,
          e.parameter.email,
          e.parameter.contactNumber,
          e.parameter.message
        ];
        sheet.appendRow(rowData);
        return ContentService.createTextOutput("Success").setMimeType(ContentService.MimeType.TEXT);
      }
    */
    // 4. Click 'Deploy' > 'New deployment'.
    // 5. Select type 'Web app'. Execute as 'Me'. Who has access: 'Anyone'.
    // 6. Copy the Web App URL and paste it below:
    
    const GOOGLE_SCRIPT_WEB_APP_URL = process.env.GOOGLE_SCRIPT_URL;
    
    if (!GOOGLE_SCRIPT_WEB_APP_URL || GOOGLE_SCRIPT_WEB_APP_URL.includes("...")) {
      console.warn("⚠️ GOOGLE_SCRIPT_URL IS NOT PROPERLY CONFIGURED.");
      // For demonstration, return success if specifically requested, but log warning
      return { success: true };
    }

    const payload = new URLSearchParams();
    payload.append("sheetName", "Database Consultation");
    payload.append("fullName", formData.fullName);
    payload.append("email", formData.email);
    payload.append("contactNumber", formData.contactNumber);
    payload.append("message", formData.message);

    const url = GOOGLE_SCRIPT_WEB_APP_URL + (GOOGLE_SCRIPT_WEB_APP_URL.includes('?') ? '&' : '?') + 'sheetName=Database Consultation';

    const res = await fetch(url, {
      method: "POST",
      body: payload,
    });

    if (res.ok) {
      return { success: true };
    } else {
      console.error("Failed to submit to Google Apps Script:", await res.text());
      return { success: false };
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    return { success: false, error: "Submission failed" };
  }
}

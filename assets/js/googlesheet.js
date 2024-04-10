async function insertRowToSheet(spreadsheetId, sheetName, data) {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}:append?includeValuesInResponse=true&valueInputOption=USER_ENTERED`;
    const body = JSON.stringify({ values: [data] });
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${YOUR_ACCESS_TOKEN}`, // Replace with your actual access token
        'Content-Type': 'application/json'
      },
      body
    });
  
    if (!response.ok) {
      throw new Error(`Error inserting row: ${response.statusText}`);
    }
  
    const result = await response.json();
    console.log('Row inserted successfully:', result);
  }
  
  // Example usage: Replace placeholders with your details
  const spreadsheetId = 'YOUR_SPREADSHEET_ID';
  const sheetName = 'Sheet1'; // Optional, leave blank for current sheet
  const data = ['New Data 1', 'New Data 2']; // Array of values for the new row
  
  insertRowToSheet(spreadsheetId, sheetName, data)
    .then(() => console.log('Row inserted!'))
    .catch(error => console.error('Error:', error));
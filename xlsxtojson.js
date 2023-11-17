const XLSX = require('xlsx');
const fs = require('fs');

// Load the XLSX file
const workbook = XLSX.readFile('localiz.xlsx');

let result = {};

workbook.SheetNames.forEach(sheetName => {
  const sheet = workbook.Sheets[sheetName];
  result[sheetName] = XLSX.utils.sheet_to_json(sheet);
});

// Convert to JSON and write to a file
const jsonContent = JSON.stringify(result, null, 2);

fs.writeFile('output.json', jsonContent, 'utf8', err => {
  if (err) {
    console.error('Error writing JSON file:', err);
  } else {
    console.log('Conversion successful. JSON file created!');
  }
});

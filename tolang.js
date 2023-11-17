const fs = require("fs");
const { generateLang, generateKeys } = require("./lang");


// Read the JSON file
fs.readFile("output.json", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading JSON file:", err);
    return;
  }

  try {
    // Parse the JSON data into a JavaScript object
    const jsonData = JSON.parse(data);

    // Access the JavaScript object
    console.log("Contents of data.json:");
    console.log(jsonData);
    let EN = {};
    let MM = {};
    let CH = {};

    Object.keys(jsonData).forEach((feature) => {
      const keys = generateKeys(jsonData[feature]);
      const en = generateLang("English", jsonData[feature], keys);
      const mm = generateLang("မြန်မာ", jsonData[feature], keys);
      const ch = generateLang("Chinese", jsonData[feature], keys);
      EN = { ...EN, ...en };
      MM = { ...MM, ...mm };
      CH = { ...CH, ...ch };
    });

    [
      { lang: EN, file: "en" },
      { lang: MM, file: "mm" },
      { lang: CH, file: "zh" },
    ].forEach((lang) => {
      fs.writeFile(
        `${__dirname}/${lang.file}.json`,
        JSON.stringify(lang.lang),
        "utf8",
        (err) => {
          if (err) {
            console.error("Error writing to JSON file:", err);
          } else {
            console.log("JSON data has been written to the file successfully.");
          }
        }
      );
    });

    // Access specific sheets or data
    // console.log('Contents of sheet1:');
    // console.log(jsonData.sheet1);

    // console.log('Contents of sheet2:');
    // console.log(jsonData.sheet2);
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
});

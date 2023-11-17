var slugify = require("slugify");

module.exports.generateKeys = (data) => {
  return data.map((item) => {
    return slugify(item.English, {
      replacement: "-", // replace spaces with replacement character, defaults to `-`
      remove: undefined, // remove characters that match regex, defaults to `undefined`
      lower: false, // convert to lower case, defaults to `false`
      strict: false, // strip special characters except replacement, defaults to `false`
      locale: "vi", // language code of the locale to use
      trim: true,
      // trim leading and trailing replacement chars, defaults to `true`
    }).toUpperCase().replace(/\(/g, '-').replace(/-/g, "_").replace(/'/g, "").replace(/\./g, '').replace(/\)/g, '-').replace(/:/g, '').replace(/-/g, '');
  });
}


module.exports.generateLang =(locale, data, keys) =>{
  const lang = {};
  keys.forEach((key, idx) => {
    lang[key] = data[idx][locale] ? data[idx][locale] : data[idx]["English"];
  });
  return lang;
}


// // console.log(data);


// // console.log(generateKeys(data))
// const keys = generateKeys(data);
// const en = generateLang("English", data, keys);
// const mm = generateLang("မြန်မာ", data, keys);
// const ch = generateLang("Chinese", data, keys);

// // console.log(en);


// [
//   { lang: en, file: "en" },
//   { lang: mm, file: "mm" },
//   { lang: ch, file: "ch" },
// ].forEach((lang) => {
//   fs.writeFile(
//     `${__dirname}/${lang.file}.json`,
//     JSON.stringify(lang.lang),
//     "utf8",
//     (err) => {
//       if (err) {
//         console.error("Error writing to JSON file:", err);
//       } else {
//         console.log("JSON data has been written to the file successfully.");
//       }
//     }
//   );
// });
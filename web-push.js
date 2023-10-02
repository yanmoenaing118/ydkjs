const webpush = require("web-push");

const vapidkeys = {
  publicKey:
    "BJug4_4hTyZakHM-X1cdFJcJZ1t4_E_rSaJA4s1ZWpZlfH9FSbETUSBfAR5UYWc6_uhsjK5zguzFQxPLslW0zPA",
  privateKey: "-OYlsLf01944XxtHq_2fMRZb9a5T1Yf_hxGFAiIrPJo",
};

webpush.setVapidDetails(
  "mailto:test@naing.com",
  vapidkeys.publicKey,
  vapidkeys.privateKey
);

const sub = {
  endpoint:
    "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABlGlAsGc34NzeIs1UId8ns_IrnAwv8wSFwFsa6MekB-g_d3VLKsG_akN98xBS-oOVupAHQpr0f0y71jiwqjBjskpYJQsMIzHJ3Ng4kcfOtNGZHuzKQSE6Jhef2hHv5KxO7NukBgyE2qNc1_3Udu4NvI2kitLLia6SmEmjMEItc8d7Oc9Q",
  expirationTime: null,
  keys: {
    auth: "m9f0W_jScP5OhkhsfLP5aA",
    p256dh:
      "BB1lGreLs91Csv12W-Q08buZinaggjGWtN8nMkU4vqqoItvu1qdFv39pPdYa_KBkcd3SBq9aDFW-VU4nXxXWi_4",
  },
};
webpush.sendNotification(sub, "My dearest Go Youn Jung");

const webpush = require("web-push");

const vapidkeys = {
  publicKey:
    "BJug4_4hTyZakHM-X1cdFJcJZ1t4_E_rSaJA4s1ZWpZlfH9FSbETUSBfAR5UYWc6_uhsjK5zguzFQxPLslW0zPA",
  privateKey: "-OYlsLf01944XxtHq_2fMRZb9a5T1Yf_hxGFAiIrPJo",
};


webpush.setVapidDetails('mailto:test@naing.com', vapidkeys.publicKey, vapidkeys.privateKey);

const sub = {};
webpush.sendNotification(sub, 'My dearest Go Youn Jung');
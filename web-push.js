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
    "https://fcm.googleapis.com/fcm/send/cNBJIQ5-ips:APA91bErqSGE58y5YDBDTEismRBibxRW4bwoOcO4dvzxW4naFHn63m2vMuNBLecZoj_92lxo5a9bu_CWmDOzRIyIfqvSOJyzqFRyc_u476oTdiExQK-vDlmSgRJR3vAm9q9vcSEXju8G",
  expirationTime: null,
  keys: {
    p256dh:
      "BIsKndJosfIge88XbA6q-KHFkRu7CL0mXyQuCbWe8dMcfy3yfH_QZ3NImTsrZ0G1Ya3dXipx3J90lhCHExCaSRo",
    auth: "jonnN56HLdd6YdeiQqp4Yw",
  },
};
webpush.sendNotification(sub, "My dearest Go Youn Jung");

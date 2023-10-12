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
    "https://fcm.googleapis.com/fcm/send/ePb8c22j7GM:APA91bHzScJSfXJJA8HXnrTqBn5Fx7yTQPtMRK0bRLDMSbZY3q4tCyNbEoDlgNHOtaaYXzJ1R7hRCU9H7_pQPucw89PfeO69qkPmTzlrQJTkyhMs8nMUlEOfTAr1u2P7JgwA5XW4rRKY",
  expirationTime: null,
  keys: {
    p256dh:
      "BJ0KqnZlphUFBeVFCTicRXdfJPpGER03czDDjleBN3SChzniaH5bxjt4ZaQUyfuCstE23Ql2Odjs8SQbTNGDQcQ",
    auth: "_aRoEDSKjgjUiXWu6nNKqw",
  },
};
webpush.sendNotification(sub, "My dearest Go Youn Jung");

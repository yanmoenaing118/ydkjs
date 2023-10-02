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
    "https://fcm.googleapis.com/fcm/send/dW5gk41d8_0:APA91bFI-p5f9No9otZljMOvD9sUFIrXCHb7licvHxcvNFkg0crXv-90Yow3bZf33w_2vzX5tHVjHzC7NnzXJGENy-KLvvK6ODwTq7jtt3oqTPaShMDCOjeYMlZzxWRpFMXDkM9z33oA",
  expirationTime: null,
  keys: {
    p256dh:
      "BI9o_h8yDoAT8wPE07U8PwcJ_m2U_SmYSMPbEYXc4SeWb494XSQT8oujUuHgEPubEBfyBkfiWqrkSEuboiurDOo",
    auth: "PC8HeexUoZrVUAhezSpCGg",
  },
};
webpush.sendNotification(sub, "My dearest Go Youn Jung");

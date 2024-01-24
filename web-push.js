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
    "https://fcm.googleapis.com/fcm/send/eHk3esTrGXg:APA91bEDER4xC3T0UEV4zE4DsUOsrhPGiwiLvKc8FYusl4aZAAsUxj8_UgZeznuL7tQ9MT1tTT9AuH-cPmilZm6ca2WEY6cQAINdJ0C6JPIDirya6cqXq31L3JNK4UYUPeoZJGcBX007",
  expirationTime: null,
  keys: {
    p256dh:
      "BGrCe8hx4XKvz7vxoBOctVDZBnLVKehwksv6i6Yx_v7tN0WQ-MFWlmErmv9ESMpauf1MP0z1XNmf7JUkLKieH2E",
    auth: "34qPmfAXYWmp7PV-r5h6YA",
  },
};

const message = {
  title: "My dearest Go Youn Jung",
  icon: "https://jabarekspres.com/wp-content/uploads/2022/07/images-13.jpeg",
  body: "Go Youn-jung is a South Korean actress and model signed under MAA. She made her acting debut in the television series He Is Psychometric and gained recognition for her supporting role in the Netflix series Sweet Home."
}

webpush.sendNotification(sub, JSON.stringify(message));

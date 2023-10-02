self.addEventListener("push", (event) => {
  event.waitUntil(
    self.registration.showNotification("My Beloved Go Youn Jung", {
      body: " Go Youn-jung is a South Korean actress and model signed under MAA. She made her acting debut in the television series He Is Psychometric and gained recognition for her supporting role in the Netflix series Sweet Home."
    })
  );
});

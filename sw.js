self.addEventListener("push", (event) => {
  if (event.data) {
    console.log(event.data.text());

    const data = JSON.parse(event.data.text());

    event.waitUntil(
      self.registration.showNotification(data.title, {
        body: data.body,
        icon: data.icon,
        vibrate: [200, 100, 200, 100, 200, 100, 200],
        tag: "go-youn-jung",
      })
    );
  }
});

self.addEventListener("notificationclick", (event) => {
  const clickedNotification = event.notification;

  // console.log(self.location)

  self.clients.matchAll().then(clients => {
    clients.forEach(client => {
      client.postMessage({
        link: event.notification.icon
      });
    });
  });

  console.log('clicked ', event.notification)
  clickedNotification.close();

  // Do something as the result of the notification click
  // const promiseChain = doSomething();
  // event.waitUntil(promiseChain);
});

const { Expo } = require('expo-server-sdk');

const sendPushNotification = async (targetExpoPushToken, message, category) => {
  const expo = new Expo();
  const chunks = expo.chunkPushNotifications([
    {
      to: targetExpoPushToken,
      sound: 'default',
      body: message,
      // data: message,
      title: category.title,
      subtitle: 'Open Call',
    },
  ]);

  const sendChunks = async () => {
    // This code runs synchronously. We're waiting for each chunk to be send.
    // A better approach is to use Promise.all() and send multiple chunks in parallel.
    chunks.forEach(async (chunk) => {
      try {
        const tickets = await expo.sendPushNotificationsAsync(chunk);
        // console.log('Tickets', tickets);
      } catch (error) {
        console.log('Error sending chunk', error);
      }
    });
  };

  await sendChunks();
};
module.exports = sendPushNotification;

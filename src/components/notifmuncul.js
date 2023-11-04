// import { useState, useEffect, useRef } from 'react';
// import { Text, View, Button, Platform } from 'react-native';
// import * as Device from 'expo-device';
// import * as Notifications from 'expo-notifications';

// Notifications.setNotificationHandler({
//   handleNotification: async () => ({
//     shouldShowAlert: true,
//     shouldPlaySound: false,
//     shouldSetBadge: false,
//   }),
// });

// export default function App() {
//   const [expoPushToken, setExpoPushToken] = useState('');
//   const [notification, setNotification] = useState(false);
//   const notificationListener = useRef();
//   const responseListener = useRef();

//   useEffect(() => {
//     registerForPushNotificationsAsync()
//       .then(token => setExpoPushToken(token))
//       .catch(error => {
//         console.error('Error registering for push notifications:', error);
//       });

//     notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
//       setNotification(notification);
//     });

//     responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
//       console.log(response);
//     });

//     return () => {
//       Notifications.removeNotificationSubscription(notificationListener.current);
//       Notifications.removeNotificationSubscription(responseListener.current);
//     };
//   }, []);

//   async function schedulePushNotification() {
//     await Notifications.scheduleNotificationAsync({
//       content: {
//         title: "You've got mail! 📬",
//         body: 'Here is the notification body',
//         data: { data: 'goes here' },
//       },
//       trigger: { seconds: 2 },
//     });
//   }

//   async function registerForPushNotificationsAsync() {
//     let token;
  
//     if (Platform.OS === 'android') {
//       await Notifications.setNotificationChannelAsync('default', {
//         name: 'default',
//         importance: Notifications.AndroidImportance.MAX,
//         vibrationPattern: [0, 250, 250, 250],
//         lightColor: '#FF231F7C',
//       });
//     }
  
//     if (Device.isDevice) {
//       const { status: existingStatus } = await Notifications.getPermissionsAsync();
//       let finalStatus = existingStatus;
//       if (existingStatus !== 'granted') {
//         const { status } = await Notifications.requestPermissionsAsync();
//         finalStatus = status;
//       }
//       if (finalStatus !== 'granted') {
//         alert('Failed to get push token for push notification!');
//         return;
//       }
//       token = (await Notifications.getExpoPushTokenAsync({ projectId: "174f51f0-78dd-487d-a047-2acd023c1cfc" })).data;
//       console.log(token);
//     } else {
//       alert('Must use physical device for Push Notifications');
//     }
  
//     return token;
//   }

//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'space-around',
//       }}>
//       <Text>Your expo push token: {expoPushToken}</Text>
//       <View style={{ alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Title: {notification && notification.request.content.title} </Text>
//         <Text>Body: {notification && notification.request.content.body}</Text>
//         <Text>Data: {notification && JSON.stringify(notification.request.content.data)}</Text>
//       </View>
//       <Button
//         title="Press to schedule a notification"
//         onPress={async () => {
//           await schedulePushNotification();
//         }}
//       />
//     </View>
//   );
// }

import React, { useEffect } from "react";
import {Text, StyleSheet, View} from "react-native";
import * as Notifications from "expo-notifications";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldPlaySound: true,
      shouldShowAlert: true,
    };
  },
});

export default function App() {
  useEffect(() => {
    const getNotificationPermission = async () => {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== "granted") {
        console.log("Izin notifikasi tidak diberikan");
      }
    };
    getNotificationPermission();

    scheduleNotifications();
  }, []);

  const scheduleNotifications = () => {
    const timesToSchedule = [
      { hour: 8, minute: 0 },
      { hour: 1, minute: 0 },
      { hour: 5, minute: 0 },
      { hour: 10, minute: 0 },
    ];

    const now = new Date();

    timesToSchedule.forEach((time) => {
      const scheduledTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), time.hour, time.minute, 0);
      if (scheduledTime > now) {
        Notifications.scheduleNotificationAsync({
          content: {
            title: "NOFAP Pengingat",
            body: "Stop Masturbasi , Ingat Kesehatan",
            sound: "default",
            vibrate: [1000],
          },
          trigger: {
            date: scheduledTime,
            repeats: true,
          },
        });
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text>Notifikasi Aktif</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

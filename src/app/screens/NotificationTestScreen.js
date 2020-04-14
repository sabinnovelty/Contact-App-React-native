import React from 'react';
import { View, Text } from 'react-native';
import messaging from '@react-native-firebase/messaging';
import { useField } from 'formik';


class NotificationText extends React.Component {

    componentDidMount() {
        console.log('componentdidmount')
        this.checkPermission();
        this.registerAppWithFCM();
        this.messageListener();
    }

    async checkPermission() {
        const enabled = await messaging().hasPermission();
        console.log('haspermission', enabled)
        if (enabled) {
            this.getToken();
        } else {
            this.requestPermission();
        }
    }
    async getToken() {

        fcmToken = await messaging().getToken();
        console.log('fcmtoken', fcmToken)
        if (fcmToken) {
            this.messageListener();
        }

    }

    messageListener = async () => {
        console.log('message leistener called')
        this.messageListener = messaging().onMessage((message) => {
            console.log(JSON.stringify(message));
            Alert.alert('A new FCM message arrived!', JSON.stringify(message));
        });

        // Register background handler
        messaging().setBackgroundMessageHandler(async remoteMessage => {
            console.log('Message handled in the background!', remoteMessage);
            Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
        });

        this.notificationListener = messaging().onNotificationOpenedApp((notificationOpen) => {
            console.log('onNotificationOpenedApp!', remoteMessage);
        })


        let initial_notification = await messaging().getInitialNotification();
        console.log('initial notification', initial_notification)
        if (initial_notification) {
            Alert.alert('A new FCM message arrived!', JSON.stringify(initial_notification));
        }
    }

    async  registerAppWithFCM() {
        let register_device = await messaging().registerDeviceForRemoteMessages();
        console.log('Register device ', register_device)

    }

    async requestPermission() {
        try {
            await firebase.messaging().requestPermission();
            // User has authorised
            this.getToken();
        } catch (error) {
            // User has rejected permissions
            console.log('permission rejected');
        }
    }
    render() {
        return (
            <View><Text>Notificate test screen</Text></View>
        )
    }
}

export default NotificationText;
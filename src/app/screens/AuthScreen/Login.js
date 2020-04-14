import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { signInWithEmailAndPassword, signOut } from '../../firebase/firebase.utils';
import firebase from 'firebase';
const Login = ({ navigation }) => {
    return (
        <View style={styles.loginContainer}>

            <Button title="Login" onPress={async () => {
                console.log('handler register')
                try {
                    let result = await signInWithEmailAndPassword('sdf', 'sd')
                } catch (error) {
                    console.log('error', error)
                }
            }} />

            <Button title="logut" onPress={() => {
                signOut()
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

export default Login;
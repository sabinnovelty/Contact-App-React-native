import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <View style={styles.loginContainer}>
            <Button title="Login" onPress={() => navigation.navigate('App')} />
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
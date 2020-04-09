import React from 'react';
import { View, Text, Button } from 'react-native';

const Register = ({ navigation }) => {
    return (
        <View>
            <Button title="GoBack" onPress={() => navigation.navigate('Login')} />
        </View>
    )
}

export default Register;
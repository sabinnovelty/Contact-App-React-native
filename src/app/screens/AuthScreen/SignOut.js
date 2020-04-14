import React from 'react';
import { View, Text, Button } from 'react-native';
import { Context as AuthContext } from '../../context/AuthContext';

const SignOut = ({ navigation }) => {

    const { signOut } = React.useContext(AuthContext);

    return (
        <View>
            <Button title="SignOut" />
        </View>
    )
}

export default SignOut;
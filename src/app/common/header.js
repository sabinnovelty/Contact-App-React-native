import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ navigation, title }) => {
    console.log('Header component is called', title)
    return (
        <View style={style.header}>
            <Text>COntact list</Text>
        </View>
    )
};

const style = StyleSheet.create({
    header: {
        flexDirection: 'row',
        flex: 1,
        backgroundColor: '#474f59',
        height: 100
    }
});

export default Header;
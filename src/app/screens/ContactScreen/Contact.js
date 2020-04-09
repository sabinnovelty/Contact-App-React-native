import React, { useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome'
import { withNavigation } from 'react-navigation'
import { Context as ContactContext } from '../../context/ContactContext';

const deleteIcon = () => {
    return (<Ionicons name="trash" style={{ fontSize: 20 }} />)
}

const Contact = ({ contact, navigation }) => {
    const [dropDown, setDropDown] = useState(false);
    const { state, deleteContact } = useContext(ContactContext);
    console.log('COntact list component===', contact)
    return (
        <View style={styles.wrapper}>
            <View style={styles.contactWrapper}>
                <TouchableOpacity onPress={() => navigation.navigate('EditContact', { contact: contact })}>
                    <Text style={styles.textStyle}>{contact.name}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteContact(contact.id)}>
                    {deleteIcon()}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setDropDown(!dropDown)}>
                    {
                        dropDown ? <Ionicons name="caret-up" style={{ fontSize: 20 }} /> : <Ionicons name="caret-right" style={{ fontSize: 20 }} />
                    }
                </TouchableOpacity>

            </View>
            {
                dropDown ? (<View style={styles.contactInfo}>
                    <Text>Phone Number:</Text>
                    <Text>{contact.contact}</Text>
                </View>) : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column'
    },
    contactWrapper: {
        padding: 10,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        borderTopWidth: 1,
        borderColor: 'black',
        paddingTop: 10
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 15
    },
    contactInfo: {

    }
})

export default withNavigation(Contact);
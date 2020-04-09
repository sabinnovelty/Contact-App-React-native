import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import contactServer from '../../api/contactApi';
import Contact from './Contact';
import { Context as ContactContext } from './../../context/ContactContext';

const ContactList = ({ navigation }) => {
    const { state, getContact } = useContext(ContactContext);
    useEffect(async () => {
        // async function getContact() {
        //     const contacts = await contactServer.get('/');
        //     console.log('contact list==', contacts)
        //     setContact(contacts.data);
        // }
        const listerner = navigation.addListener('didFocus', () => {
            console.log('addlistener focus calles')
            getContact()
        })
        getContact();
        return () => {
            listerner.remove()
        }
    }, [])
    console.log('render called', state)
    if (state.length == 0) {
        return (<View>
            <Button title="create contact" onPress={() => navigation.navigate('ContactCreate')} />
            <Text>No contact List found.</Text></View>
        )
    } else {
        return (
            <View style={styles.contactContainer}>
                <Button title="create contact" onPress={() => navigation.navigate('ContactCreate')} />
                <FlatList
                    data={state}
                    renderItem={({ item }) => {
                        return (
                            <Contact contact={item} />
                        )
                    }}
                />
            </View>
        )
    }

}

const styles = StyleSheet.create({
    contactContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    }
})

export default ContactList;
import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigationFocus, NavigationEvents } from 'react-navigation';
import CreateContact from './ContactCreate';
import ContactForm from '../../components/ContactForm';
import { Context as ContactContext } from '../../context/ContactContext';

const EditContact = ({ navigation, isFocused }) => {

    const { state, editContact } = useContext(ContactContext);

    const contact = navigation.getParam('contact');
    console.log('Edit screen is focused', isFocused )
    console.log('contact', contact)
    return (
        <View>
            <NavigationEvents onWillBlur={() => console.log('I am leaving')} onWillFocus={() => console.log('I am foucsed')} />
            <ContactForm contact={contact} handleSubmit={(values) => editContact(contact.id, values.name, values.phoneNumber, () => navigation.pop())} />
        </View>
    )
}

const styles = StyleSheet.create({

})


export default withNavigationFocus(EditContact);
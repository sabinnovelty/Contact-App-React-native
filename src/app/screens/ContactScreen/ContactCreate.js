import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ContactForm from '../../components/ContactForm';
import { Context as ContactContext } from '../../context/ContactContext';

const CreateContact = ({ navigation }) => {

    const { state, addContact } = useContext(ContactContext);
    return (
        <View>
            <ContactForm handleSubmit={(values) => { addContact(values.name, values.phoneNumber, () => navigation.navigate('Contact')) }} />
        </View>
    )
}

const styles = StyleSheet.create({

})


export default CreateContact;
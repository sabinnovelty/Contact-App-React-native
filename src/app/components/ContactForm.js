import { Formik } from 'formik';
import React, { Fragment } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { ContactFormSchema } from './formValidation';

const ContactForm = ({ contact, handleSubmit }) => {
    console.log('&*(*&', contact)
    return (
        <Formik
            initialValues={{ name: contact.name, phoneNumber: contact.contact }}
            onSubmit={values => { handleSubmit(values) }}
            validationSchema={ContactFormSchema}
        >
            {
                ({ handleChange, values, handleSubmit, errors, touched }) => (

                    <Fragment>
                        <TextInput placeholder="name" value={values.name} onChangeText={handleChange('name')} />
                        {
                            errors.name && touched.name ? (<Text style={styles.errorMsg}>{errors.name}</Text>) : null
                        }
                        <TextInput placeholder="phone nummber" value={values.phoneNumber} onChangeText={handleChange('phoneNumber')} />
                        {
                            errors.phoneNumber && touched.phoneNumber ? (<Text style={styles.errorMsg}>{errors.phoneNumber}</Text>) : null
                        }
                        <Button title="create" value={values.phoneNumber} onPress={handleSubmit} />
                    </Fragment>
                )
            }
        </Formik>
    )
}

const styles = StyleSheet.create({
    errorMsg: {
        color: 'red',
        textAlign: 'center'
    }
})

ContactForm.defaultProps = {
    contact: {
        name: '',
        contact: ''
    }
}

export default ContactForm;
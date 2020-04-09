import * as Yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validate = (values, props) => {
    const errors = {};
    if (!values.name) {
        errors.name = "Requierd"
    } else if (!values.phoneNumber) {
        errors.phoneNumber = 'Required'
    }

    return errors;
}

const ContactFormSchema = Yup.object().shape({
    name: Yup.string()
        .min(5, 'Too short')
        .required('Required'),
    phoneNumber: Yup.string()
        .max(10, 'Phone number cannot be more than 10')
        .min(10, 'Phone number cannot be more than 10')
        .required('Required')
})

export { validate, ContactFormSchema };
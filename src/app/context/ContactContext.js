import createDataContext from './createDataContext';
import api from '../api/contactApi';


const contactReducer = (state, action) => {
    switch (action.type) {
        case 'edit_contact': return state.map(contact => {
            return contact.id == action.id ? action.payload : contact
        });
            break;
        case 'get_contacts': return action.payload;
            break;
        case 'delete_contact': return state.filter(x => x.id !== action.payload)
        default: return state;
    }
}

const addContact = dispatch => {
    return async (name, contact, callback) => {
        await api.post('/', { name, contact })
        if (callback) {
            callback()
        }
    }
}

const editContact = dispatch => {
    return async (id, name, contact, callback) => {
        console.log('edit coantact called', id)
        await api.put(`/${id}`, { id, name, contact })
        dispatch({ type: 'edit_contact', payload: { id, name, contact } });
        if (callback) { callback() }
    }
}

const getContact = dispatch => {
    return async () => {
        const contacts = await api.get('/');
        console.log('getcontact called', contacts)
        dispatch({ type: 'get_contacts', payload: contacts.data })

    }
}

const deleteContact = dispatch => {
    return async (id) => {
        await api.delete(`/${id}`);
        dispatch({ type: 'delete_contact', payload: id })
    }
}

export const { Context, Provider } = createDataContext(contactReducer, { editContact, addContact, getContact, deleteContact }, [])


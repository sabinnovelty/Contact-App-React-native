import createDataContext from './createDataContext';
import { auth } from '../firebase/firebase.utils';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'signin': return { ...state, loggedIn: true }
        case 'signout': return { ...state, loggedIn: false }
        default: return state;
    }
}

const signIn = dispatch => {
    return (email, password) => {
        auth.signInWithEmailAndPassword('sabin@gmail.com', 'password').then(result => {
            console.log('FIreabse signin successfull', result)
            dispatch({ type: 'signin', payload: true })
        }).catch(error => reject(error))
    }
}

const signOut = (dispatch) => {
    console.log('signuout function called')
    return () => {
        auth.signOut().then(success => {
            console.log('signout succes', success)
            dispatch({ type: "signout" })
            resolve(success)
        }).catch(error => dispatch({ type: 'error', payload: 'Something went wrong!' }))
    }
}

const onAuthStateChanged = dispatch => {
    return () => {
        let unsubcriber = auth.onAuthStateChanged(userAuth => {
            console.log('User state changed', userAuth);
            if (userAuth) {
                navigate('Contact');

            } else {
                navigate('Login')
            }
        })
    }
}



export const { Context, Provider } = createDataContext(authReducer, { signIn, onAuthStateChanged, signOut }, { loggedIn: false, error: null })


import firebase from 'firebase';

const credentials = {
    clientId: '924183654033-9c68ajegk541rdn6ap0gv6cgsvpm1b7a.apps.googleusercontent.com',
    appId: '',
    apiKey: 'AIzaSyDGUok6dcEEU62HUT_0UjstoIpsDLQCzsA',
    databaseURL: 'https://fitness-app-51497.firebaseio.com',
    storageBucket: 'fitness-app-51497.appspot.com',
    messagingSenderId: '',
    projectId: 'fitness-app-51497',
};


firebase.initializeApp(credentials);

export const singUpWithEmailAndPassword = (email, password) => {
    return new Promise((resolve, reject) => {
        auth.createUserWithEmailAndPassword('sabin@gmail.com', 'password').then(result => {
            console.log('result', result); resolve(result)
        }).catch(function (error) {
            console.log('error', error);
            reject(error);
        })
    })
}

export const signInWithEmailAndPassword = (email, password) => {
    console.log('email', email, password)
    return new Promise((resolve, reject) => {
        auth.signInWithEmailAndPassword('sabin@gmail.com', 'password').then(result => {
            console.log('FIreabse signin successfull', result)
            resolve(result)
        }).catch(error => reject(error))
    })
}

export const signOut = () => {
    console.log('signuout function called')
    return new Promise((resolve, reject) => {
        auth.signOut().then(success => {
            console.log('signout succes', success)
            resolve(success)
        }).catch(error => reject(error))
    })
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsubcriber = auth.onAuthStateChanged(userAuth => {
            unsubcriber();
            console.log('userAuthstae', userAuth)
            resolve(userAuth)
        }, reject)
    })
}

export const database = firebase.database();
export const auth = firebase.auth();
export const provider = firebase.auth.GithubAuthProvider();
export const storage = firebase.storage();

export default firebase;





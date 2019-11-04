import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAR0WVISVNCMgwjM4ksEtO8IrbzQuOI-3E',
  authDomain: 'freak-fight2019.firebaseapp.com',
  databaseURL: 'https://freak-fight2019.firebaseio.com',
  projectId: 'freak-fight2019',
  storageBucket: 'freak-fight2019.appspot.com',
  messagingSenderId: '680383500225',
  appId: '1:680383500225:web:6e2c2410e5346e407aa940',
  measurementId: 'G-DLHYSZ4LGV'
};

import app from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAR0WVISVNCMgwjM4ksEtO8IrbzQuOI-3E',
  authDomain: 'freak-fight2019.firebaseapp.com',
  databaseURL: 'https://freak-fight2019.firebaseio.com',
  projectId: 'freak-fight2019',
  storageBucket: 'freak-fight2019.appspot.com',
  messagingSenderId: '680383500225',
  appId: '1:680383500225:web:6e2c2410e5346e407aa940',
  measurementId: 'G-DLHYSZ4LGV'
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.facebookProvider = new app.auth
      .FacebookAuthProvider().setCustomParameters({ display: 'popup' });
    this.firestore = app.firestore();
  }
  updateField = (name, id, obj) => {
    this.firestore.collection(name).doc(id).update(obj);
  };
  getCollectionDoc = (name, id) =>
    this.firestore.collection(name).doc(id).get();
  doSignInWithFacebook = () => this.auth.signInWithPopup(this.facebookProvider);
  doSignOut = () => this.auth.signOut();

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve);
    });
  }

  signInAdmin = (credentials) => {
      const firebase = getFirebase();
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' })
      }).catch(err => {
        dispatch({ type: 'LOGIN_ERROR' }, err)
      })
    
  }

  addFighterHandler = async (fight) => {
    const pointer = await this.firestore.collection('fights')
    try {
      pointer.doc().set({ ...fight })
      console.log(fight)
    } catch (error) {
      console.log(error)
    }
  }

  
export default Firebase;





















export const signIn = (credentials) => {

  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.psassword
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' })
    }).catch(err => {
      dispatch({ type: 'LOGIN_ERROR' }, err)
    })
  }
}

export const signOut = () => {

  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    console.log('SIGNOUT FROM AUTH')

    firebase.auth().signOut().then(() => {
      dispatch(({ type: 'LOGOUT_SUCCESS' }))
    }).catch(err => dispatch({ type: 'LOGOUT_FAILED' }, err))
  }
}
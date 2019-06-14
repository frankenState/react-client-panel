import { createStore, combineReducers, compose } from 'redux';
import firebase from 'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer } from 'redux-firestore';
// Reducers
// @todo

const firebaseConfig = {
	apiKey: "AIzaSyBvw8Ddt6zgryE9mhsH210nsy1WRw0YE1I",
    authDomain: "reactclientpanel-bf4c0.firebaseapp.com",
    databaseURL: "https://reactclientpanel-bf4c0.firebaseio.com",
    projectId: "reactclientpanel-bf4c0",
    storageBucket: "reactclientpanel-bf4c0.appspot.com",
    messagingSenderId: "910696690845",
    appId: "1:910696690845:web:2b3ec124710e8273"
};

// react-redux-firebase config
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true 
}

// Init firebase instance
firebase.initializeApp(firebaseConfig);
// Init firestore
const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), 
  reduxFirestore(firebase) 
)(createStore)


// Add firebase to reducers
const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer 
})

// Create initial state
const initialState = {};

// Create store
const store = createStoreWithFirebase(rootReducer, initialState, compose(
	reactReduxFirebase(firebase),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
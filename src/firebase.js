import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBYvWGq9_hGASOw8TuvDLxHdadXwK1T814",
    authDomain: "fir-react-todo-82007.firebaseapp.com",
    databaseURL: "https://fir-react-todo-82007.firebaseio.com",
    projectId: "fir-react-todo-82007",
    storageBucket: "fir-react-todo-82007.appspot.com",
    messagingSenderId: "367167518845",
    appId: "1:367167518845:web:28762fc2e56176e66d5914",
    measurementId: "G-GS2BVTR2RW"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database().ref();

export const todoRef = database.child('todo');
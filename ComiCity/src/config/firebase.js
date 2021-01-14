import firebase from 'firebase'

// Initialize Firebase
var firebaseConfig = {
    apiKey: "AIzaSyB7oTJ5G-HptJlTDASHlMRmDq37lhohJ-k",
    authDomain: "comiccity-52.firebaseapp.com",
    databaseURL: "https://comiccity-52-default-rtdb.firebaseio.com",
    projectId: "comiccity-52",
    storageBucket: "comiccity-52.appspot.com",
    messagingSenderId: "70785213457",
    appId: "1:70785213457:web:6f85f7eaadb884fe37bdb0"

};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
firebase.auth = firebase.auth();
firebase.db=db;
console.log(firebase.database());
console.log("Conectado a Firebase");

export default firebase;
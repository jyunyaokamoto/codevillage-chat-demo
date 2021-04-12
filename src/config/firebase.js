import firebase from 'firebase/app'
//* asだとexport,export default全てfirebaseとしてimportしてしまうので上記の記述

import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAm8ux1DCffynr9OWk1USdS0JbK9M8j1vw",
    authDomain: "chat1-22cf2.firebaseapp.com",
    projectId: "chat1-22cf2",
    storageBucket: "chat1-22cf2.appspot.com",
    messagingSenderId: "420678399723",
    appId: "1:420678399723:web:7874111238ddeea39ab0ae"
}

firebase.initializeApp(firebaseConfig)

export default firebase
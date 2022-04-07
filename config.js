'use strict';
const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const {
    PORT,
    HOST,
    HOST_URL,
} = process.env;

assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

// API_KEY="AIzaSyCFkvTx55DvTZP01VjmlbkhQPUEb86XJTA"
// AUTH_DOMAIN= "realtime-flutter-1b867.firebaseapp.com"
// DATABASE_URL= "https://realtime-flutter-1b867-default-rtdb.firebaseio.com"
// PROJECT_ID= "realtime-flutter-1b867"
// STORAGE_BUCKET=  "realtime-flutter-1b867.appspot.com"
// MESSAGING_SENDER_ID= "794380958759"
// APP_ID= "1:794380958759:web:1111de432305e1ae9ae202"

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: "AIzaSyCFkvTx55DvTZP01VjmlbkhQPUEb86XJTA",
        authDomain: "realtime-flutter-1b867.firebaseapp.com",
        databaseURL: "https://realtime-flutter-1b867-default-rtdb.firebaseio.com",
        projectId: "realtime-flutter-1b867",
        storageBucket: "realtime-flutter-1b867.appspot.com",
        messagingSenderId: "794380958759",
        appId: "1:794380958759:web:1111de432305e1ae9ae202"
    }
}
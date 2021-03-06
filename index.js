'use strict';
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const firebase = require('firebase');

const FCM = require('fcm-node')
var serverKey = require('./privateKey.json')

const app = express();
const db = firebase.initializeApp({
    apiKey: "AIzaSyCFkvTx55DvTZP01VjmlbkhQPUEb86XJTA",
    authDomain: "realtime-flutter-1b867.firebaseapp.com",
    databaseURL: "https://realtime-flutter-1b867-default-rtdb.firebaseio.com",
    projectId: "realtime-flutter-1b867",
    storageBucket: "realtime-flutter-1b867.appspot.com",
    messagingSenderId: "794380958759",
    appId: "1:794380958759:web:1111de432305e1ae9ae202"
});

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
var fcm = new FCM(serverKey);

var databaseDB = db.database();
// databaseDB.ref("notification/status").set("yes");

// const sendMessage = (token, title, body) => {
//     var message = {
//         to: token,
//         // collapse_key: '...',

//         notification: {
//             title: title,
//             body: body
//         },

//         data: {  //you can send only notification or only data(or include both)
//             my_key: 'my value',
//             my_another_key: 'my another value'
//         }
//     }

//     fcm.send(message, function (err, response) {
//         if (err) {
//             console.log("Something has gone wrong!")
//         } else {

//             console.log("Successfully sent with response: ", response)
//             const add_notification = new Notification({
//                 token: req.body.token,
//                 title: req.body.title,
//                 content: req.body.body
//             })

//         }
//     })
// }

// setInterval(() => {
//     databaseDB.ref('notification/status').once('value')
//         .then(function (snapshot) {
//             if (snapshot.val() == "yes") {
//                 databaseDB.ref('fcm-token/token').once('value')
//                     .then(function (snapshot_in) {
//                         const token = snapshot_in.val();
//                         console.log(token);
//                         sendMessage(token, 'Warning', "C?? c??i ?????u bu???i v??o nh?? b???n");
//                         databaseDB.ref("notification/status").set("no");
//                     })
//             } else {
//                 console.log("no")
//             }
//         })
// }, 1000);

app.get('/', (req, res) => {
    databaseDB.ref("notification/status").set("yes");
    res.send("SP")
    console.log("Yes")
})

const POST = process.env.PORT || 3000;


app.listen(POST, () => console.log('App is listening on url http://localhost:' + POST));

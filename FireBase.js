const firebaseConfig = {
  apiKey: "AIzaSyCiPQWIcLEg2Iea4KNunF5VbV3Dwx8Wcec",
  authDomain: "taxpayer-records-manager.firebaseapp.com",
  databaseURL: "https://taxpayer-records-manager-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "taxpayer-records-manager",
  storageBucket: "taxpayer-records-manager.firebasestorage.app",
  messagingSenderId: "554668984220",
  appId: "1:554668984220:web:039ad607b194ad2b0dea59",
  measurementId: "G-ZEVXHM0YZ1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference to Realtime Database
const db = firebase.database();

function saveRecord(record) {
  const recordId = Date.now(); // unique key
  firebase.database().ref("records/" + recordId).set(record);
}

function fetchAllRecords() {
  firebase.database().ref("records").once("value", snapshot => {
    const data = snapshot.val();
    const records = Object.values(data || {});
    renderAllRows(records);
  });
}
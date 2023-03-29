// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from 'firebase/database'


// Your web app's Firebase configuration
function StartFirebase() {
const firebaseConfig = {
  apiKey: "AIzaSyCQpJqV14I0fQxTOyGF16aF6mEXn2Bq7aM",
  authDomain: "warehousedb-74728.firebaseapp.com",
  databaseURL: "https://warehousedb-74728-default-rtdb.firebaseio.com",
  projectId: "warehousedb-74728",
  storageBucket: "warehousedb-74728.appspot.com",
  messagingSenderId: "272893062672",
  appId: "1:272893062672:web:20913c73f36d5d222d2495"



};

const app = initializeApp(firebaseConfig);
// Initialize Firebase
return getDatabase(app)

}
export default StartFirebase

import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const healthCareAuthentication = (app) => {

    initializeApp(firebaseConfig);
}

export default healthCareAuthentication;
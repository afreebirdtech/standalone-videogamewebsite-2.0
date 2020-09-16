import firebase from 'firebase';

const apiKey = process.env.REACT_APP_APIKEY
const authDomain = process.env.REACT_APP_AUTHDOMAIN
const databaseURL = process.env.REACT_APP_DATABASE_URL
const projectID = process.env.REACT_APP_PROJECT_ID
const storageBucket = process.env.REACT_APP_STORAGE_BUCKET
const messagingSenderID = process.env.REACT_APP_MESSAGING_SENDER_ID
const appID = process.env.REACT_APP_APP_ID

const config = {
    apiKey: `${apiKey}`,
    authDomain: `${authDomain}`,
    databaseURL: `${databaseURL}`,
    projectId: `${projectID}`,
    storageBucket: `${storageBucket}`,
    messagingSenderId: `${messagingSenderID}`,
    appId: `${appID}`
}

firebase.initializeApp(config);
export default firebase;

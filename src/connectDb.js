//everything below is to connecting to firestore
//Line 2-4 your are destructuring {}. Your importing the information in the curly brackets from exsisting folders.
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"
import { creds } from "../credentials.js" 

initializeApp(
    { credential: cert(creds) }
) 
//importing a function and calling it 
//taking one object and giving it a paramater
//the parameter is one object with a key called credentials
//connecting to firebase project

export const db = getFirestore() //connecting to database inside that project

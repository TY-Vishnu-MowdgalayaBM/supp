import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
const firebaseConfig = {
  apiKey: "AIzaSyDLuMye9GtWZLhjt-FJBlnjNRiQneirDIc",
  authDomain: "supp-1c26c.firebaseapp.com",
  projectId: "supp-1c26c",
  storageBucket: "supp-1c26c.appspot.com",
  messagingSenderId: "348581879208",
  appId: "1:348581879208:web:7a0aa44141483ca1c8d19d",
  measurementId: "G-SKDW2SFDQJ"
}
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}

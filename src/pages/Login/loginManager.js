import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification, sendPasswordResetEmail } from "firebase/auth";


export const initializeLoginFramework = () => {
  initializeApp(firebaseConfig);
}

export const handleGoogleSignIn = () => {
  const goggleProvider = new GoogleAuthProvider();
  const auth = getAuth();
  return signInWithPopup(auth, goggleProvider)
  .then(result => {
    const {displayName, email} = result.user;
    const signedInUser = {
      firstName: displayName,
      email: email,
      success: true,
    }
    return signedInUser;
    //console.log(displayName, photoURL, email);
  })
  .catch(error => {
    console.error(error);
    console.log(error.message);
  })
}

export const userCreateWithEmailAndPassword = (firstName, email, password) => {
  const auth = getAuth();
     return createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          const newUserInfo = res.user;
          newUserInfo.error = '';
          newUserInfo.success = true;
          updateUserName(firstName);
          verifyEmail();
          return newUserInfo;
        })
        .catch((error) => {
          const newUserInfo = {};
          newUserInfo.error = error.code;
          newUserInfo.success = false;
          return newUserInfo;
        });
}

export const logInWithEmailAndPassword = (email, password) => {
  const auth = getAuth();
      return signInWithEmailAndPassword(auth, email, password)
        .then((res) => {
          const newUserInfo = res.user;
          newUserInfo.error = '';
          newUserInfo.success = true;
          return newUserInfo;
          //console.log('sign in user info', res.user);
        })
        .catch((error) => {
          const newUserInfo = {};
          newUserInfo.error = error.code;
          newUserInfo.success = false;
          return newUserInfo;
        });
}


const verifyEmail = () => {
  const auth = getAuth();
  sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    alert('Email verification sent!');
    // ...
  });
}

export const resetPassword = (email) => {
  const auth = getAuth();
  sendPasswordResetEmail(auth, email)
    .then(() => {
      // Password reset email sent!
      alert('Please check your email');
      // ..
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });
}

const updateUserName = (firstName) => {
  const auth = getAuth();
  updateProfile(auth.currentUser, {
      displayName: firstName, 
    })
    .then(() => {
      console.log("user name updated successfully");
    })
    .catch((error) => {
      console.log(error);
    });
}
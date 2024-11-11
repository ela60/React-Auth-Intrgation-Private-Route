import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase.init';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    
    const [user, setUser] = useState(null);

    const name = 'Hey Ela ......';

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }


    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signOutUser = () => {
        return signOut(auth);
    }

    useEffect(() => {
      const unSubscribe  = onAuthStateChanged(auth, currentUser => {
            console.log('current user', currentUser);
            setUser(currentUser);
      })
        return () => {
            unSubscribe();
        }


    },[])


    // onAuthStateChanged(auth, currentUser => {
    //     if (currentUser) {
    //         console.log('currently logged user', currentUser);
    //         setUser(currentUser);
    //     }
    //     else {
    //         console.log('No user logged in');
    //         setUser(null);
    //     }
    // })
      
    const authInfo = {
        name,
        user,
        createUser,
        signInUser,
        signOutUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {/* main part who will have access to the context */}
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;



    // ***/ 
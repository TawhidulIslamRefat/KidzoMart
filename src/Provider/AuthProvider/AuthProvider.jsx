import React, { createContext, useState } from 'react';
import app from '../../Firebase/Firebase.config';



export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword
    }
};

export default AuthProvider;
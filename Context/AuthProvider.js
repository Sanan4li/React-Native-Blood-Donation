import React, {createContext, useState} from 'react';
import auth from "@react-native-firebase/auth";
export const AuthContext = createContext();

const AuthProvider = (props)=>{
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    return(
        <AuthContext.Provider
    value = {{
        user, 
        setUser,
        error,
        setError,
        login : async (email, password) =>{
            try {
                await auth().signInWithEmailAndPassword(email, password)
            }
            catch(e){
                setError(e);
            }
        },
        register: async (email, password)=>{
            try{
                await auth().createUserWithEmailAndPassword(email, password);
            }
            catch(e){
                setError(e);
            }
        },
        logout: async ()=>{
            try{
                auth().signOut();
            }
            catch(e){
                console.log(e);
            }
        }
    }}
    >
        {props.children}
    </AuthContext.Provider>

    )    
}




export default AuthProvider;

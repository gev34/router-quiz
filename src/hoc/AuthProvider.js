import { createContext , useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) => {

    const [userLogin , setUserLogin] = useState(null);
    const [userPassword , setUserPassword] = useState(null);

    const signIn = (newUserLogin , newUserPassword , cb) => {
        setUserLogin(newUserLogin);
        setUserPassword(newUserPassword);
        cb();
    }
    const signOut = (cb) => {
        setUserLogin(null);
        setUserPassword(null);
        cb();
    }
    const value = {userLogin , userPassword , signIn , signOut}
    return <>
    <AuthContext.Provider value = {value}>
        {children}
    </AuthContext.Provider>
    </>
}
import { createContext, useState } from "react";

export const AuthContext = createContext(null);

<<<<<<< HEAD
export const AuthProvider = ({children}) => {

    const [userLogin , setUserLogin] = useState(null);
    const [userPassword , setUserPassword] = useState(null);

    const signIn = (newUserLogin , newUserPassword  ) => {
        setUserLogin(newUserLogin);
        setUserPassword(newUserPassword);
    }
    const signOut = (cb) => {
        setUserLogin(null);
        setUserPassword(null);
        cb();
    }
    //console.log(userLogin)
    const value = {userLogin , userPassword , signIn , signOut}
    return <>
    <AuthContext.Provider value = {value}>
        {children}
    </AuthContext.Provider>
=======
export const AuthProvider = ({ children }) => {
  
  const value = {};
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
>>>>>>> b9c663b06a3b74ec588bf902fe904860881c49e0
    </>
  );
};

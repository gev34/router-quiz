import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const signIn = (newUserLogin, newUserPassword, cb) => {
    setUserLogin(newUserLogin);
    setUserPassword(newUserPassword);
    cb();
  };
  const signOut = (cb) => {
    setUserLogin(null);
    setUserPassword(null);
    cb();
  };
  //console.log(userLogin)
  const value = { userLogin, userPassword, signIn, signOut };
  return (
    <>
      <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    </>
  );
};

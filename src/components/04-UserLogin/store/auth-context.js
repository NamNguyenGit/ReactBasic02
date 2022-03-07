import React, { useState, useEffect } from "react";

const defaultValues = {
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
};

const AuthContext = React.createContext(defaultValues);

export default AuthContext;

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  const loginHandler = () => {
    localStorage.setItem("isLoggedIn", "1");
    console.log("calledqath");
    setIsLoggedIn(true);
  };

  const values = {
    isLoggedIn: isLoggedIn,
    onLogout: logoutHandler,
    onLogin: loginHandler,
  };

  return (
    <AuthContext.Provider value={values}>{props.children}</AuthContext.Provider>
  );
};

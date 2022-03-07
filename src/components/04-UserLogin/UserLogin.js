import React from "react";
import Layout from "./Layout";
import { AuthContextProvider } from "./store/auth-context";

function UserLogin() {
  return (
    <AuthContextProvider>
      <Layout />
    </AuthContextProvider>
  );
}

export default UserLogin;

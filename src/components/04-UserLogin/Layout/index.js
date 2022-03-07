import React, { Fragment, useContext } from "react";
import MainHeader from "./MainHeader/MainHeader";
import Login from "./Login/Login";
import Home from "./Home/Home";
import AuthContext from "../store/auth-context";

export default function Layout() {
  const ctx = useContext(AuthContext);
  return (
    <Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

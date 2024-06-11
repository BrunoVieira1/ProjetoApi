import { Fragment, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { auth } from "../services/api/auth/AuthService";

import Home from "../pages/home";
import Signin from "../pages/signin";
import Navigation from "../components/navigation";

var response = 0;
export async function handleCheckLogin(email: string, password: string) {
  response = await auth(email, password);
  console.log("Response do handlwlogin", response);
  return response === 1
    ? ((window.location.href = "/auth"), localStorage.setItem("isLogged", "1"))
    : (window.location.href = "/");
}

const RoutesApp = () => {
  var isLogged = localStorage.getItem("isLogged");
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route
            path="/home"
            element={isLogged === "1" ? <Navigation /> : <Signin />}
          />
          <Route path="/" element={<Signin />} />
          <Route path="/auth" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;

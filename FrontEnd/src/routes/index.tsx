import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Signin from "../pages/signin";

export function handleCheckLogin(email: string, password: string) {
  console.log(email, password);
}

const Private = ({ Item }: any) => {
  const signed = 0;

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Signin />} />
          <Route path="*" element={<Signin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;

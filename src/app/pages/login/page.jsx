import React, { useState } from "react";

import Login from "../../components/templates/login";
import Logo from "../../../assets/images/logo.png";

export default function LoginPage() {
  const [credential, setCredential] = useState({
    username: "admin",
    password: "password",
  });
  const [cardInfo, setCardInfo] = useState({
    title: "Welcome",
    // subtitle: "Subtitle Login",
    image: Logo,
    align: "left",
  });

  function changeValue(e) {
    console.log(e.target.name, e.target.value);
    setCredential({ ...credential, [e.target.name]: e.target.value });
  }

  function submitForm(e) {
    e.preventDefault();
    window.location = "/dashboard";
  }

  return (
    <Login
      credential={credential}
      card_info={cardInfo}
      changeValue={changeValue}
      submitForm={submitForm}
    />
  );
}

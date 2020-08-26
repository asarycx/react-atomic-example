import React from "react";
import Button from "../../atoms/Button";
import Card from "../../molecules/Card";
import Input from "../../molecules/Input";
import Form from "../../atoms/Form";
import Text from "../../atoms/Text";
import def from "./dummy";
export default function whatLogin({
  credential = def.credentials,
  card_info = def.card_info,
  changeValue = def.changeValue,
  submitForm = def.submitForm,
  text = def.text,
}) {
  //   function changeValue(e) {
  //     setCredentials({ ...credential, [e.target.name]: e.target.value });
  //   }

  //   function submitForm(e) {
  //     e.preventDefault();
  //     alert("submitted");
  //   }
  return (
    <div className="login-page">
      <Card {...card_info}>
        <Text>{text}</Text>
        <Form name="login-form" onSubmit={submitForm}>
          <Input
            label="Username"
            name="username"
            onChange={changeValue}
            value={credential.username}
            type="text"
          />
          <Input
            label="Password"
            name="password"
            onChange={changeValue}
            value={credential.password}
            type="password"
          />

          <Button text="submit" color="dark" type="submit" align="right" />
        </Form>
      </Card>
    </div>
  );
}

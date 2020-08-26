import React, { useState } from "react";
import "../assets/styles/index.scss";
import ImageCircle from "./components/atoms/Image/Circle";
import Text from "./components/atoms/Text";
import Title from "./components/atoms/Title";
import Label from "./components/atoms/Input/Label";
import InputText from "./components/atoms/Input/Text";
import Button from "./components/atoms/Button";
import Card from "./components/molecules/Card";
import Input from "./components/molecules/Input";
import Form from "./components/atoms/Form";
import ButtonIcon from "./components/atoms/ButtonIcon";
import MobileMenu from "./components/molecules/MobileMenu";
function App() {
  const [val, setVal] = useState("test");

  function changeValue(e) {
    setVal(e.target.value);
  }

  function submitForm(e) {
    e.preventDefault();
    var formData = new FormData(e.target);
    alert("submitted");
  }

  const menus = [
    {
      text: "🏡",
      link: "#",
    },
    {
      text: "📝",
      link: "#",
    },
    {
      text: "🔧",
      link: "#",
    },
  ];

  return (
    <>
      <div className="App wrapper">
        <ImageCircle
          src="https://image.freepik.com/free-photo/young-happy-man-showing-thumbs-up_171337-1130.jpg"
          alt="Nice"
        />
        <Text>Sample</Text>
        <Title text="sample" size="h2" color="success" />
        <Label text="sample" color="success" required />
        <InputText value={val} onChange={changeValue} />
        <Button text="submit" />
        <Button text="submit" color="dark" />
        <Button text="submit" color="fail" />
        <Button text="submit" color="success" />
        <Card
          image="https://image.freepik.com/free-photo/young-happy-man-showing-thumbs-up_171337-1130.jpg"
          title="test"
          align="right"
        >
          <Form name="login-form" onSubmit={submitForm}>
            <Input
              label="name"
              name="name"
              onChange={changeValue}
              value={val}
              type="text"
            />
            <Input
              label="password"
              name="password"
              onChange={changeValue}
              value={val}
              type="password"
            />

            <Button text="submit" color="dark" type="submit" />
          </Form>
          Mantap
        </Card>
      </div>
      <MobileMenu menus={menus} />
    </>
  );
}

export default App;

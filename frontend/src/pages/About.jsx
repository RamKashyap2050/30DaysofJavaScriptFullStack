import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const RedirecttoHomePage = () => {
    navigate("/");
  };
  return (
    <div>
      I am About Page with Button Component
      <Button value={"Go to Home"} RedirecttoHomePage={RedirecttoHomePage} />
    </div>
  );
};

export default About;

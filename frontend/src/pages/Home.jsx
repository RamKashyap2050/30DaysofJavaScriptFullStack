import React from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const RedirecttoAboutPage = () => {
    navigate("/about");
  };
  return (
    <div>
      I am Home Page with Button Component
      <Button value={"Go to About"} RedirecttoAboutPage={RedirecttoAboutPage} />
    </div>
  );
};

export default Home;

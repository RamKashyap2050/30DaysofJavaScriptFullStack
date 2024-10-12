import React from "react";
import { useNavigate } from "react-router-dom";

const FourOFour = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>I am 404 not found page click here to redirection to Home</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Click Here
      </button>
    </div>
  );
};

export default FourOFour;

import React from "react";

const Button = ({ value, RedirecttoAboutPage, RedirecttoHomePage }) => {
  const handleClick = () => {
    if (RedirecttoHomePage) {
      RedirecttoHomePage(); // Execute the Home page redirection if it's defined
    } else if (RedirecttoAboutPage) {
      RedirecttoAboutPage(); // Execute the About page redirection if it's defined
    }
  };

  return (
    <div>
      <button onClick={handleClick}>{value}</button>
    </div>
  );
};

export default Button;

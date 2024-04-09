import React from "react";

const SignupForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}></form>
    </div>
  );
};

export default SignupForm;

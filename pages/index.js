import React from "react";
import GoogleLogin from "react-google-login";

const Home = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };
  return (
    <div>
      <GoogleLogin
        clientId="148962662500-04n0a1nhvddppk35ptij7uodprafksam.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default Home;

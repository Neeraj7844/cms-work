import React, {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import API from "../api/api";

import "../styles/login.css";

const Login = () => {

  const navigate =
    useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);




  const handleLogin = async (
    e
  ) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response =
        await API.post(
          "/auth/login",
          {
            email,
            password,
          }
        );



      // TOKEN SAVE
      localStorage.setItem(
        "token",
        response.data.token
      );



      // USER SAVE
      localStorage.setItem(
        "user",
        JSON.stringify(
          response.data.user
        )
      );



      alert(
        "Login Successful"
      );



      // DASHBOARD REDIRECT
      navigate("/dashboard");

    } catch (error) {

      alert(

        error.response?.data
          ?.message ||

        "Login Failed"

      );

    } finally {

      setLoading(false);

    }

  };




  return (

    <div className="auth-page">

      <div className="auth-box">

        <h1>
          Admin Login
        </h1>



        <form
          onSubmit={
            handleLogin
          }
        >

          {/* EMAIL */}
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) =>
              setEmail(
                e.target.value
              )
            }
            required
          />



          {/* PASSWORD */}
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            required
          />



          {/* BUTTON */}
          <button type="submit">

            {
              loading

              ? "Please Wait..."

              : "Login"
            }

          </button>

        </form>



        <p>

          Don't have account?

          <Link to="/signup">
            Signup
          </Link>

        </p>

      </div>

    </div>

  );

};

export default Login;
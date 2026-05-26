import React, {
  useState,
} from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import API from "../api/api";

import "../styles/login.css";

const Signup = () => {

  const navigate =
    useNavigate();

  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);




  const handleSignup = async (
    e
  ) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response =
        await API.post(
          "/auth/signup",
          {
            name,
            email,
            password,
          }
        );



      alert(
        response.data.message
      );



      // LOGIN PAGE REDIRECT
      navigate("/");

    } catch (error) {

      alert(

        error.response?.data
          ?.message ||

        "Signup Failed"

      );

    } finally {

      setLoading(false);

    }

  };




  return (

    <div className="auth-page">

      <div className="auth-box">

        <h1>
          Create Account
        </h1>



        <form
          onSubmit={
            handleSignup
          }
        >

          {/* NAME */}
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            required
          />



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
            placeholder="Create Password"
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

              : "Signup"
            }

          </button>

        </form>



        <p>

          Already have account?

          <Link to="/">
            Login
          </Link>

        </p>

      </div>

    </div>

  );

};

export default Signup;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const inputFiledHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data } = await axios.post(`http://localhost:4000/api/login`, {
      email,
      password,
    });
    console.log("data:", data);
    if (data.success) {
        navigate("/api/welcome");
      }

  };

  return (
    <div>
      <div>
        <h1>Login Info</h1>
        <form onSubmit={submitHandler}>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={email}
            onChange={inputFiledHandler}
          ></input>
          <input
            type="text"
            name="password"
            placeholder="password"
            value={password}
            onChange={inputFiledHandler}
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;

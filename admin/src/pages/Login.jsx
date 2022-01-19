import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import styled from "styled-components";
import { login } from "../redux/apiCalls";

const Container = styled.div`
  height: 100vh;
  padding: 0px;
  display: flex;
  margin: -10px -8px;
  margin-bottom: -25px;
  align-items: center;
  justify-content: center;
  background-image: url("https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80");
`;

const Wrapper = styled.div`
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 394px;
  height: 33px;
  background-color: #7a3f3f;
  color: white;
  font-weight: bold;
  border: 1px solid #563232;
  font-size: 16px;
`;
const Button = styled.button`
  width: 100%;
  height: 33px;
  border: 1px solid gray;
  color: #563232;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  letter-spacing: 1px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };
  return (
    <Container>
      <Wrapper>
        <Input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={loginHandler}>Login</Button>
      </Wrapper>
    </Container>
  );
};

export default Login;

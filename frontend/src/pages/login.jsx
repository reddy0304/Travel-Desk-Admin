import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/jsl_logo.png"; // Ensure the logo path is correct

// Styled Components
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const LoginBox = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  max-width: 500px;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
`;

const Logo = styled.img`
  width: 250px;
  height: 40px;
  margin-bottom: -10px;
  margin-top:0px;
`;

const Title = styled.h1`
  color: #333;
  font-size: 28px;
  margin-bottom: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0px;
  
`;

const Label = styled.label`
  font-size: 24px;
  color: #333;
  margin-bottom: 5px;
  justify-content:flex-start;
  display:flex;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
  margin: 20px 0;
  border: none;
  border-radius: 5px;
  background-color: #ffa500;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #ff8c00;
  }
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  color: #555;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const LoginPage = ({ setIsAuthenticated }) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({ ...prev, [name]: value }));
    console.log(credentials);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sample credentials for testing
    const validCredentials = {
      email: "admin@example.com",
      password: "password123",
    };

    if (
      credentials.email === validCredentials.email &&
      credentials.password === validCredentials.password
    ) {
      console.log("Authenticated");
      setIsAuthenticated(true);
      navigate("/dashboard"); // Redirect to dashboard
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Logo src={logo} alt="Company Logo" />
        <Title>Admin Portal - Travel Desk</Title>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
        <Footer>
          Forgot your password? <a href="#reset">Reset it here</a>
        </Footer>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;

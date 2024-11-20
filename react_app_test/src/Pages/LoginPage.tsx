import React, { useState } from "react";
import "../Styles/login.css";
// import { authenticateUser } from "../Services/axiosServices.ts";
import {authenticateUser} from  '../Services/AuthServices.ts'
import { useNavigate } from "react-router";
const LoginPage: React.FC = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errors, setErrors] = useState<{ userName?: string; password?: string }>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  // Validation function for inputs
  const validateInputs = (): boolean => {
    const newErrors: { userName?: string; password?: string } = {};
    if (!userName.trim()) {
      newErrors.userName = "Username is required";
    } else if (userName.length < 3) {
      newErrors.userName = "Username must be at least 3 characters long";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateInputs()) return;

    setIsLoading(true);
console.log("user",userName);
console.log("password",password);
    try {
      const response = await authenticateUser(userName, password);
      console.log("Login successful:", response);
      alert("Login successful!");
      setUserName("");
      setPassword("");
      if(response){
        navigate('/home');
      }
      setErrors({});
    } catch (error: any) {
      console.error("Login failed:", error);
      alert(error || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">Login</h2>
        <div className="input-group">
          <label htmlFor="username" className="input-label">
            Username
          </label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className={`input-field ${errors.userName ? "input-error" : ""}`}
            placeholder="Enter your username"
          />
          {errors.userName && <small className="error-message">{errors.userName}</small>}
        </div>
        <div className="input-group">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`input-field ${errors.password ? "input-error" : ""}`}
            placeholder="Enter your password"
          />
          {errors.password && <small className="error-message">{errors.password}</small>}
        </div>
        <button type="submit" className="submit-button" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

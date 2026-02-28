import React, { useEffect, useState } from "react";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

const App = () => {
  const [currentPage, setCurrentPage] = useState("signup");
  const [currentUser, setCurrentUser] = useState(null);

  const handleSignup = (formData) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const existingUser = users.find((user) => user.email === formData.email);
    if (existingUser) {
      alert("Email already registered, Please login");
      setCurrentPage("login");
      return;
    }

    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));

    setCurrentUser(formData);
    localStorage.setItem("currentUser", JSON.stringify(formData));

    setCurrentPage("dashboard");
  };

  const handleLogin = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(
      (user) => user.email === email && user.password === password,
    );
    if (user) {
      setCurrentUser(user);
      localStorage.setItem("currentUser", JSON.stringify(user));
      setCurrentPage("dashboard");
    } else {
      alert("Invalid email and password");
    }
  };
  const handleLogout = () => {
    setCurrentPage(null);
    localStorage.removeItem("currentUser");
    setCurrentPage("signup");
  };

  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      setCurrentUser(JSON.parse(user));
      setCurrentPage("dashboard");
    }
  }, []);

  return (
    <div>
      {currentPage === "signup" && (
        <Signup
          onSignUp={handleSignup}
          switchToLogin={() => setCurrentPage("login")}
        />
      )}
      {currentPage === "login" && (
        <Login
          onLogin={handleLogin}
          switchToSignup={() => setCurrentPage("signup")}
        />
      )}
      {currentPage === "dashboard" && (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;

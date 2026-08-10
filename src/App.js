import React, { useEffect, useState } from "react";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

const App = () => {
  const [currentPage, setCurrentPage] = useState("signup");
  const [currentUser, setCurrentUser] = useState(null);

  // Signup successful
  const handleSignup = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentPage("dashboard");
  };

  // Login successful
  const handleLogin = (user) => {
    setCurrentUser(user);
    localStorage.setItem("currentUser", JSON.stringify(user));
    setCurrentPage("dashboard");
  };

  // Logout
  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("currentUser");
    setCurrentPage("login");
  };

  // Check if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem("currentUser");

    if (user) {
      setCurrentUser(JSON.parse(user));
      setCurrentPage("dashboard");
    }
  }, []);

  return (
    <>
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

      {currentPage === "dashboard" && currentUser && (
        <Dashboard user={currentUser} onLogout={handleLogout} />
      )}
    </>
  );
};

export default App;

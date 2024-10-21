import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SignIn from "./auth/SignIn";

function App() {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      {/* <Router>
        <Routes ></Routes>
      </Router> */}
      <SignIn />
    </div>
  );
}

export default App;

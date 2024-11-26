import React from "react";
import Header from "./components/Header";
import Chatbot from "./components/Chatbot";
import Footer from "./components/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";



const App = () => {
  return (
    <>
     <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex-grow">
        <Chatbot />
      </main>
      <Footer />
    </div>
    </>
  );
};

export default App;






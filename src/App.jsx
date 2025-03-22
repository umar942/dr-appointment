import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Doctor from "./pages/doctor";
import Login from "./pages/login";
import About from "./pages/about";
import Contact from "./pages/contact";
import Myprofile from "./pages/Myprofile";
import Myappointment from "./pages/Myappointment";
import Appointment from "./pages/appointment";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Doctor" element={<Doctor />} />
        <Route path="/Doctor/:speciality" element={<Doctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Myprofile" element={<Myprofile />} />
        <Route path="/Myappointment" element={<Myappointment />} />
        <Route path="/Appointment/:docId" element={<Appointment />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;


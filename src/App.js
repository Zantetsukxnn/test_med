import logo from './logo.svg';
import './App.css';
import React from 'react';
// Import components for routing from react-router-dom library
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import custom Components
import Navbar from './Components/Navbar/Navbar';
import Landing_Page from './Components/Landing_Page/Landing_Page';
import Sign_Up from './Components/Sign_Up/Sign_Up';
import Login from './Components/Login/Login';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation'; 
import FindDoctorSearch from './Components/FindDoctorSearch/FindDoctorSearch';
// Function component for the main App
function App() {
  // Render the main App component
  return (
    <div className="App">
        {/* Set up BrowserRouter for routing */}
        <BrowserRouter>
          {/* Display the Navbar component */}
          <Navbar/>
          <InstantConsultation/>
          

          {/* Set up the Routes for different pages */}
          <Routes>
            {/* Define individual Route components for different pages */}
            <Route path="/" element={<Landing_Page/>}/>
            <Route path="/Components/Login/Login.html" element={<Login/>}/>
            <Route path="/Components/Sign_Up/Sign_Up.html" element={<Sign_Up/>}/>
            <Route path="/Components/InstantConsultationBooking/InstantConsultation" element={<InstantConsultation />} />
            <Route path="/Components/Login/Login.html" element={<Login/>}/>
            <Route path="/Components/FindDoctorSearch/FindDoctorSearch.js" element={<FindDoctorSearch/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}
// Export the App component as the default export
export default App;
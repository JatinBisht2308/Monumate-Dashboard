// import React from "react";
// import styled from "styled-components";
// import Sidebar from "./components/Sidebar";
// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";
// import "./app.css";

// function App() {
//   return (
//     <div className="container">
//       <Login />
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Login from './components/Login';
import styled from "styled-components";
import Container from './components/Container'
import './app.css'

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/dashboard" element={<Container />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;

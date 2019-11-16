import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/app_layout/app_layout";
import Routes from './routes/routes'

function App() {
  return (
    <Router>
      <div className="App">
        <AppLayout />
        <Routes/>
      </div>
    </Router>
  );
}

export default App;

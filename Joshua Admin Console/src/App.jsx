import './App.css'
import {Route, Router, Routes} from "react-router";
import Dashboard from "./Pages/Dashboard.jsx";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}

export default App

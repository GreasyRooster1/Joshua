import './App.css'
import {Route, Router, Routes} from "react-router";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import AuthLock from "./components/AuthLock.jsx";

function App() {
  return (
    <Routes>
        <Route path="/" element={<AuthLock><Dashboard /></AuthLock>} />
    </Routes>
  )
}

export default App

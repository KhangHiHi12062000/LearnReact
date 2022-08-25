import './App.css';
import { Routes, Route, Switch } from "react-router-dom";
import Login from "./pages/Login"
import Dashboard from './pages/Dashboard';

function App() {
  return(
    <div>
      <Routes>
        <Route exact path="/login" element={<Login />} />
		    <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;

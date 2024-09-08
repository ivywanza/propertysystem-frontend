import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./App.css";
import "./components/Layout";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route element={<Layout />}> */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        {/* </Route> */}
      </Routes>
    </Router>
  );
}

export default App;

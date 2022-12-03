import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Pages
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";

function App() {
  return (
    <Router>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

      </Routes>

    </Router>
  );
}

export default App;

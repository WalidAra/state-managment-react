import Home from "./components/Home";
import Login from "./components/Login";
import "./input.css";
import "./output.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import ReduxProvider from "./redux/Provider";
function App() {
  return (
    <main className="w-full h-screen bg-slate-950 items-center justify-center flex">
      <ReduxProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Router>

      </ReduxProvider>
    </main>
  );
}

export default App;

// --- src/App.jsx ---
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import JobsPage from "./components/Dashboard/JobsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/jobs" element={<JobsPage />} />
    </Routes>
  );
}

export default App;

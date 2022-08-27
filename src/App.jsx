import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./Pages/Landing";
import { Co_worker_info } from "./Pages/Co_worker_info";
import { Laptop_list } from "./Pages/Laptop_list";
import { Laptop_specs } from "./Pages/Laptop_specs";
import { Laptop } from "./Pages/Laptop";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Co_worker_info" element={<Co_worker_info />} />
      <Route path="/Laptop_list" element={<Laptop_list />} />
      <Route path="/Laptop_specs" element={<Laptop_specs />} />
      <Route path="/Laptop" element={<Laptop />} />
    </Routes>
  );
}

export default App;

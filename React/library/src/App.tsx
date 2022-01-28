import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import { Counter } from "./features/counter/Counter";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<Counter />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

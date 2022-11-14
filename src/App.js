import { BrowserRouter as Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import UpdateComp from "./components/UpdateComp";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/update" element={ <UpdateComp/>} />
    </Routes>
  );
}

export default App;

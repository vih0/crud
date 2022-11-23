import { Routes, Route } from "react-router-dom";
import FormComp from "./components/FormComp";

import UpdateComp from "./components/UpdateComp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<FormComp />} />
      <Route path="/update/:bookId" element={<UpdateComp />} />
    </Routes>
  );
}

export default App;

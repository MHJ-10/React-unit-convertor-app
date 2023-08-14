import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Data from "./components/common/data";
import Length from "./components/common/length";
import Speed from "./components/common/speed";
import Time from "./components/common/time";
import Volume from "./components/common/volume";
import Weight from "./components/common/weight";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/length" element={<Length />} />
        <Route path="/volume" element={<Volume />} />
        <Route path="/weight" element={<Weight />} />
        <Route path="/data" element={<Data />} />
        <Route path="/speed" element={<Speed />} />
        <Route path="/time" element={<Time />} />
        <Route path="/not-found" element={<NotFound />} />
        <Route path="/" element={<Navigate to={"/length"} replace />} />
        <Route path="*" element={<Navigate to="/not-found" replace />} />
      </Routes>
    </div>
  );
}

export default App;

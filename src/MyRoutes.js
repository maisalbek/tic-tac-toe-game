import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Home2 from "./components/Home2";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route>
          {/* <Route path="" element={<Home />} /> */}
          <Route path="" element={<Home2 />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;

import React from "react";

import { Routes, Route } from "react-router-dom";

import { SearchHeros } from "./pages/SearchHeros";
import { InitialPage } from "./pages/InitialPage";
import { NotExists } from "./pages/NotExists";

import { AuthRequire } from "./context/auth/AuthRequire";

export const RouteApp = () => {
    return (
        <Routes>
          <Route path="/" element={<InitialPage />} />
          <Route path="/search" element={<AuthRequire><SearchHeros /></AuthRequire> } />
          <Route path="*" element={<AuthRequire><NotExists /></AuthRequire>} />
        </Routes>
      );

}

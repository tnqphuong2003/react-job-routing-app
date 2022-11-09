import * as React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../components/HomePage";
import JobDetail from "../components/JobDetail";
import LoginPage from "../components/LoginPage";
import NotFoundPage from "../components/NotFoundPage";
import BlankLayout from "../layouts/BlankLayout";
import MainLayout from "../layouts/MainLayout";
import AuthRequire from "./AuthRequire";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route element={<BlankLayout />}>
        {/* <Route path="/login" element={<LoginPage />} /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default Router;

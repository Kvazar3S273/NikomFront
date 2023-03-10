import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/auth/Register";
import LoginPage from "./components/auth/Login";
import MainPage from "./components/MainPage";
import AuthPage from "./components/auth/Auth";
import DefaultLayout from "./components/containers/DefaultLayout";
import AdminLayout from "./components/containers/AdminLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<MainPage />} />

            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/auth" element={<AuthPage />} />
            {/* <Route exact path="/page404" element={<Page404 />} /> */}
          </Route>

          <Route path="/admin" element={<AdminLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

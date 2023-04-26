import "./App.css";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/auth/Register";
import LoginPage from "./components/auth/Login";
import MainPage from "./components/MainPage";
import AuthPage from "./components/auth/Auth";
import DefaultLayout from "./components/containers/DefaultLayout";
import AdminLayout from "./components/containers/AdminLayout";
import Catalog from "./components/pages/Catalog";
import Contacts from "./components/pages/Contacts";
import ProductCrud from "./components/containers/AdminLayout/ProductCrud";
import Users from "./components/containers/AdminLayout/Users";
import AddProduct from "./components/pages/AddProduct";
import UpdateProduct from "./components/pages/UpdateProduct";

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
            <Route exact path="/catalog" element={<Catalog />} />
            <Route exact path="/contacts" element={<Contacts />} />
            <Route exact path="/admin/crud" element={<ProductCrud />} />
            <Route exact path="/admin/users" element={<Users />} />
            <Route exact path="/addproduct" element={<AddProduct />} />
            <Route exact path="/updateproduct" element={<UpdateProduct />} />
            {/* <Route exact path="/page404" element={<Page404 />} /> */}
          </Route>

          <Route path="/admin" element={<AdminLayout />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

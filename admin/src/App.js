import React, { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import classes from "./app.module.css";
import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Login from "./pages/Login";
import { useSelector } from "react-redux";

function App() {
  // let admin = null;
  // let user = JSON.parse(
  //   JSON.parse(localStorage.getItem("persist:root")).user
  // ).currentUser;
  // if (user !== null) {
  //   admin = user.isAdmin;
  // }
  const { currentUser } = useSelector((state) => state.user);
  // let admin = false;
  // if (currentUser) {
  //   admin = true;
  // }
  // console.log(admin);
  return (
    <Router>
      <Routes>
        {(!currentUser || !currentUser.isAdmin) && (
          <Route path="/login" element={<Login />} />
        )}
        {currentUser && currentUser.isAdmin && (
          <Route path="/login" element={<Navigate to="/" />} />
        )}
      </Routes>
      {currentUser && currentUser.isAdmin && (
        <>
          <Topbar />
          <div className={classes.container}>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/newProduct" element={<NewProduct />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;

import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Sidebar from "./adminComponents/Sidebar";
import Topbar from "./adminComponents/Topbar";
import classes from "./app.module.css";
import AdminHome from "./adminPages/AdminHome";
import NewProduct from "./adminPages/NewProduct";
import UserList from "./adminPages/UserList";
import User from "./adminPages/User";
import NewUser from "./adminPages/NewUser";
import AdminProductList from "./adminPages/AdminProductList";
import AdminProduct from "./adminPages/AdminProduct";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";

const App = () => {
  const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser);
  // const user = false;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={currentUser ? <Cart /> : <Login />} />
        <Route
          path="/register"
          element={currentUser ? <Navigate to="/" /> : <Register />}
        />
        <Route
          path="/login"
          element={currentUser ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/success" element={<Success />} />
      </Routes>
      {currentUser && currentUser.isAdmin && (
        <>
          <Topbar />
          <div className={classes.container}>
            <Sidebar />
            <Routes>
              <Route path="/admin" element={<AdminHome />} />
              <Route path="/users" element={<UserList />} />
              <Route path="/user/:userId" element={<User />} />
              <Route path="/newUser" element={<NewUser />} />
              <Route path="/adminProducts" element={<AdminProductList />} />
              <Route path="/adminProduct/:id" element={<AdminProduct />} />
              <Route path="/newProduct" element={<NewProduct />} />
            </Routes>
          </div>
        </>
      )}
    </Router>
  );
};

export default App;

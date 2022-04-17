import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Pages/Home/About/About";
import Checkout from "./Pages/Home/Checkout/Checkout";
import Footer from "./Pages/Home/Footer/Footer";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Home/Login/Login/Login";
import RequireAuth from "./Pages/Home/Login/RequireAuth/RequireAuth";
import SignUp from "./Pages/Home/Login/SignUp/SignUp";
import Navigation from "./Pages/Home/Navigation/Navigation";
import Notfound from "./Pages/Home/Notfound/Notfound";
import Blogs from "./Pages/Home/Blogs/Blogs";
import Services from "./Pages/Home/Services/Services";

function App() {
  return (
    <div className="">
      <Navigation></Navigation>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/service/:serviceId"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

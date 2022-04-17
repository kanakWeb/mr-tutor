import {Routes,Route} from 'react-router-dom';
import "./App.css";
import Footer from './Pages/Home/Footer/Footer';
import Home from "./Pages/Home/Home/Home";
import Login from './Pages/Home/Login/Login/Login';
import SignUp from './Pages/Home/Login/SignUp/SignUp';
import Navigation from './Pages/Home/Navigation/Navigation';

function App() {
  return (
    <div className="">
      <Navigation></Navigation>
      
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

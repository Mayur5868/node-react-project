import './App.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import PrivateComponet from './Components/PrivateComponet';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import AddProducts from './Components/AddProducts';
import ProductList from './Components/ProductsList';
import UpdateProduct from './Components/UpdateProduct';

function App() {
  return (
    <>

        <img src="https://www.surat-training-course.com/assets/img/inspire-training-course-surat.webp" alt="logo" className='logo'/>
        
      <div className='App'>
        
        <BrowserRouter>


          <Nav />
          <Routes>
            <Route element={<PrivateComponet />}>
              <Route path='/' element={<ProductList/>} />
              <Route path='/add' element={<AddProducts/>} />
              <Route path='/update/:id' element={<UpdateProduct/>} />
              <Route path='/logout' element={<h1>Logout Listing Component</h1>} />
              <Route path='/profile' element={<h1>Profile Listing Component</h1>} />
            </Route>
            <Route path='/SignUp' element={<Signup />} />
            <Route path='/login' element={<Login />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;

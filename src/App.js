import './App.css';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import Home from './Components/Pages/Home';
import Footer from './Components/Footer';
import Services from './Components/Pages/Services';
import Product from './Components/Pages/Product';
import SignUp from'./Components/Pages/SignUp';
function App() {
  return (
    <>
      <Router basename='/react-website1'>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/services' element={<Services/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
    
  );
}

export default App;

import './App.css';
import { Routes , Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import About from './Pages/About'
import Login from './Pages/Login';
import Home from './Components/Home';
import DeliveryPage from './Pages/Delivery';
import Map from './Components/Map';




function App() {
  return (
    <div className="App">
      <Navbar/>
    
    <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
             <Route path="/Login" element={< Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/map" element={<Map/>}/>
              <Route path="/Delivery"element={<DeliveryPage/>}/>


    </Routes>
    {/* <DeliveryPage/> */}
   
    </div>
  );
}

export default App;

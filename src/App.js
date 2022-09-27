
import './App.css';
import Landing from './Pages/LandingPage/Landing'
import AboutUs from './Pages/AboutUsPage/AboutUs'
import { Route, Routes } from 'react-router-dom';
// import Nav from './Components/NavBar/Nav'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/AboutUs' element={<AboutUs/>}/>
      </Routes>

      
    </div>
  );
}

export default App;

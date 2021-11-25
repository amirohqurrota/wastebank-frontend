
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './page/Home/Home';
import AboutUs from './page/AboutUs/AboutUs';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/history" element={<Home />}/>
        <Route path="/finance" element={<Home />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

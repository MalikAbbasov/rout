
import './App.css';
import { BrowserRouter,Routes , Route } from "react-router-dom";
import About from './page/About';
import Home from './page/Home';
import Contact from './page/Contact';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import Mainlayout from './layout/Mainlayout';
import Detail from './page/Detail';

function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
          <Route element={<Mainlayout/>}>
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/" element={<Home/>} />
          <Route path='/detail/:id' element={<Detail/>}/>
          </Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

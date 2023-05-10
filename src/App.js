// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';

import TributorE from './components/Tributor E/TributorE';
import Contact from './components/Contact/Contact';

import Header from './components/Header/Header';


import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import TributorCM from './components/Tributor CM/TributorCM';
import Prekets from './components/Prekets/Prekets';


function App() {
  return (
    <div className="App">
      <Router>

   <Header/>


 
   <Routes>
   < Route path="/" exact element= {<Main/>}/>
   < Route path="/about" element= {<About/>}/>
   < Route path="/footer" element= {<Footer/>}/>
   < Route path="/contact" element= {<Contact/>}/>
   < Route path="/product" element= {<Main/>}/>

   < Route path="/tributorE" element= {<TributorE/>}/>
   < Route path="/tributorCM" element= {<TributorCM/>}/>
   < Route path="/prekets" element= {<Prekets/>}/>

  
   
   

   </Routes>
   <Footer/>

   </Router>

    </div>
  );
}

export default App;

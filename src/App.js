import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
// import Skills from "./components/Skills/Skills";
import Sam from "./components/Skills/Sam";
// import All from "./components/Skills/All";
// import Certificates from "./components/Certificates/Certificates";
import Sum from "./components/Certificates/Sum";
// import Article from "./components/content/Article";
// import Certs from "./components/democert/Certs";
import Real from "./components/Real/Real";
import Contact from "./components/Contact/Contact";
import {
  BrowserRouter ,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <div className="p-1 bg-gradient-to-r from-indigo-500 h-screen ">

     <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={ <About /> } />
      <Route path="/skills" element={ <Sam/>} />
      <Route path="/projects" element={<Real/>} />
      <Route path="/contacts" element={<Contact/>} />
       </Routes>
    
    </BrowserRouter>
     
                      {/* <Navbar/>
                       <Home/>
                       <About/> */}
     {/* <Skills/> */}
                        {/* <Sam/> */}
     {/* <All/> */}
     {/* <Certificates/> */}
                        {/* <Sum/> */}
     {/* <Article/> */}
     {/* <Certs/> */}
                        {/* <Real/>
                     <Contact/> */}
    </div>
  );
}

export default App;

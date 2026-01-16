//import { useState } from 'react'
import Nav from "./components/nav.jsx";
import './App.css'
import News from "./components/News.jsx";
import Who from "./components/Who.jsx";
import Principles from "./components/Principles.jsx";
function App() {

  return (
    <>
      <Nav />
      <Who />
      <Principles />
      <News />
    </>
  );
}

export default App

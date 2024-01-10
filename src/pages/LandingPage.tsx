import React from 'react';
import { Header, Remover } from '../components/index';
import backgroundImg from "../images/logo.svg"
import "../index.css"

const LandingPage = ()  => {
  return (
    <div className="App ">
      <div className="background w-screen h-screen absolute"></div>
      <Header />
      <div className="remover absolute">
        <Remover /> 
      </div>
    </div>
  )
}

export default LandingPage;



import React from 'react'
import Header from './components/Header';
import {Outlet} from 'react-router-dom';

const Home = () => {
  return (
    <>
    <div>
     <Header/>
      <div><h1>Home Page..</h1></div>
    </div>
    <Outlet/>
    </>
    
  )
}

export default Home

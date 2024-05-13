import React from 'react';
import './App.css';
import './pico.indigo.min.css';
import { Outlet } from 'react-router';
import NavBar from './Component/NavBar/NavBar';
import Galaxy from './Component/Galaxy/Galaxy';
import FormPage from './Pages/FormPage/FormPage';
import "./MilkyWay.scss"
import Tribune from './Component/Tribune/Tribune';

function App() {    
  const stars = [];
  for(let i=0; i<300; i++){
      stars.push(<div className='star'></div>)
  }
  
  
  const milkyWay = [];
  for(let i=0; i<300; i++){
      milkyWay.push(<div className='star'></div>)
  }
  return (
    <div className="App container container-MilkyWay">
      <div className="stars">{stars}</div>
      <div className='milky-way'>{milkyWay}</div>
      {/* <NavBar/> */}
      <Outlet/>
      <Galaxy/>
      <FormPage/>
      <Tribune/>
    </div>
  );
}

export default App;

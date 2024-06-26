import './App.css';
import './pico.indigo.min.css';
import { Outlet } from 'react-router';
import NavBar from './Component/NavBar/NavBar';
import "./MilkyWay.scss"
import React from 'react';

type Props = {}

const App = (props: Props) => {

  const stars : React.ReactElement[] = [];
  for(let i=0; i<300; i++){
      stars.push(<div className='star'></div>)
  }
  
  
  const milkyWay : React.ReactElement[] = [];
  for(let i=0; i<300; i++){
      milkyWay.push(<div className='star'></div>)
  }

  return (
    <div className="App container container-MilkyWay">
      <div className="stars">{stars}</div>
      <div className='milky-way'>{milkyWay}</div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default App




import React, { useEffect, useState } from 'react';
import './App.css';
import './pico.indigo.min.css';
import { Outlet } from 'react-router';
import NavBar from './Component/NavBar/NavBar';
import Galaxy from './Component/Galaxy/Galaxy';
import FormPage from './Pages/FormPage/FormPage';
import "./MilkyWay.scss"
import Tribune from './Component/Tribune/Tribune';
import { Planet } from './Planet.d';
import { getPlanets } from './Services/PlanetService';

function App() {    
  const stars = [];
  for(let i=0; i<300; i++){
      stars.push(<div className='star'></div>)
  }
  
  
  const milkyWay = [];
  for(let i=0; i<300; i++){
      milkyWay.push(<div className='star'></div>)
  }

  const [planet, setPlanet] =useState<Planet[]>([]); //useState<Planet[]>([]);
  const [serverError, setServerError] = useState<string|null>(null);//useState<string|null>(null);
  useEffect(()=>{
    const getResult =  async() =>{
         const result = await getPlanets()
         console.log(result)
         if (typeof result === "string"){
           setServerError(result)
         }
         else if (Array.isArray(result.data)){
          setPlanet(result.data);
         }
       }
       getResult();
 },[])

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

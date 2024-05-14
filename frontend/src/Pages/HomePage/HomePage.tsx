import React, { useEffect, useState } from 'react'

import Tribune from '../../Component/Tribune/TribuneList';
import { Planet } from '../../Planet.d';
import { getPlanets } from '../../Services/PlanetService';
import Galaxy from '../../Component/Galaxy/Galaxy';



interface Props  {}

const HomePage = (props: Props) => {
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
  <>
      <Galaxy planet={planet}/>
  </>
  );
  
}

export default HomePage
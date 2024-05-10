import React, { SyntheticEvent } from 'react'
import PlanetForm from '../../Component/PlanetForm/PlanetForm'
import axios from 'axios';

type Props = {}

const planetCreate = async (e:SyntheticEvent)=>{
 e.preventDefault();
//  if (Object.keys(errors).length === 0) {
//     try {
//         const response = await axios.post('http://localhost:8080/apiv1/signup', planetCreate);
//         console.log(response);
//       }catch (error) {
//         console.error(error);
//       }
// }
}

const FormPage = (props: Props) => {
  return (
    <>
    <PlanetForm planetCreate={planetCreate} />
    <h1>Test</h1>
    </>
    
  )
}

export default FormPage
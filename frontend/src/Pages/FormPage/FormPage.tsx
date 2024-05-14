import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import PlanetForm from '../../Component/PlanetForm/PlanetForm'
import { Errors, Inputs, Planet } from '../../Planet.d';
import { createPlanet } from '../../Services/PlanetService';

type Props = {}


const FormPage = (props: Props) => {
      const [serverError, setServerError] = useState<string|null>(null);

      const validate = (newInputs: Inputs): Errors => {
        const newErrors: Errors = {}
      
        if (newInputs.name.length>10) {
            newErrors.name = "Too long"
        }
        if (newInputs.size>2 ) {
            newErrors.size = "Too big"
        }
        // if (typeof newInputs.size != 'number'){
        //   newErrors.size = "A number please"
        // }
        if (newInputs.speed>1 ) {
          newErrors.size = "Too big"
        }
        // if (typeof newInputs.speed != 'number'){
        //   newErrors.speed = "A number please"
        // }
        if (newInputs.rotationSpeed>5 ) {
          newErrors.size = "Too big"
        }
        // if (typeof newInputs.rotationSpeed != 'number'){
        //   newErrors.rotationSpeed = "A number please"
        // }
        return newErrors
      }
      const [planet, setPlanet] = useState< Planet>({
        id : 0,
        color : "",
        xRadius :0,
        zRadius:0,
        size:0,
        speed:1,
        offset:0,
        rotationSpeed:0,
        name:""
      });
      const [errors, setErrors] = useState<Errors>(validate(planet));

      const planetCreate = async (e:SyntheticEvent)=>{
        e.preventDefault();
        if (Object.keys(errors).length === 0) {
          const result  = await createPlanet(planet)
          console.log(typeof result)
          if (typeof result === "string"){
            setServerError(result)
          }
          else if (typeof result == 'object'){ 
            console.log("success go to the homepage");
          }
        }
      }

      
      const handleChange= (e:ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target;
        setPlanet(prevData => ({...prevData, [name]: value}));
        setErrors(validate({ ...planet, [name]: value }))
      }

  return (
    <>
      {serverError && <p>serverError..</p>}
      <PlanetForm planetCreate={planetCreate} handleChange={handleChange} errors={errors} planet={planet}/>
    </>
    
  )
}

export default FormPage
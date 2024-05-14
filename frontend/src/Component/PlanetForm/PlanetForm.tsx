import React, { ChangeEvent, SyntheticEvent, useState } from 'react'
import { Errors, Inputs, Planet, Touched } from '../../Planet.d';
import'./PlanetForm.css'


interface Props  {
    handleChange:(e:ChangeEvent<HTMLInputElement>) =>void;
    errors:Errors;
    planetCreate: (e:SyntheticEvent)=>void;
    planet:Planet;
}
const PlanetForm : React.FC<Props> = ({ planetCreate, errors, planet, handleChange}: Props):JSX.Element => {
  const [toggle, setToggle] = useState(true)
  const [touched, setTouched] = useState<Touched>({})

  return (
    <div className='planetform'>
      {/* <button 
            onClick={() => setToggle(!toggle)} 
            >
          Add a planet
      </button> */}
      {toggle && (
        <form onSubmit={planetCreate}>
          <h2>Add a planet</h2>
          <div>
          <label>
            Name:
            <input type="text" name="name" value={planet.name} onChange={(e)=> handleChange(e)} onBlur={() => setTouched({ ...touched, name: true })}/>
            {errors.name && touched.name ? <p>{errors.name}</p> : null}
          </label>
          </div>
          <div>
          <label>
            Color:
            <input type="text" name="color" value={planet.color} onChange={(e)=> handleChange(e)} onBlur={() => setTouched({ ...touched, color: true })}/>
            {errors.color && touched.color ? <p>{errors.color}</p> : null}
          </label>
          </div>
          <div>
          <label>
            Size:
            <input type="text" name="size" value={planet.size} onChange={(e)=> handleChange(e)} onBlur={() => setTouched({ ...touched, size: true })}/>
            {errors.size && touched.size ? <p>{errors.size}</p> : null}
          </label>
          </div>
          <div>
          <label>
            Speed:
            <input type="text" name="speed" value={planet.speed} onChange={(e)=> handleChange(e)} onBlur={() => setTouched({ ...touched, speed: true })}/>
            {errors.speed && touched.speed ? <p>{errors.speed}</p> : null}
          </label>
          </div>
          <div>
          <label>
            Rotation speed:
            <input type="text" name="rotationSpeed" value={planet.rotationSpeed} onChange={(e)=> handleChange(e)} onBlur={() => setTouched({ ...touched, rotationSpeed: true })}/>
            {errors.rotationSpeed && touched.rotationSpeed ? <p>{errors.rotationSpeed}</p> : null}
          </label>
          </div>
        <button type="submit">Add</button>
      </form>
     )}
  </div>
  )
}

export default PlanetForm
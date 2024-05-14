import axios from "axios"
import { Planet } from "../Planet.d";


const api ="http://localhost:5182/api/planet" 

export const getPlanets = async ()=>{
    try{
        const data = await axios.get(api );
        return data;
    }
    catch (error){
        if(axios.isAxiosError(error)){
            console.log("error message " , error.message);
            return error.message;
        }
        else{
            console.log("inexpected error ", error)
            return "an unexpected error has occured";
        }
    }

}

export const createPlanet = async (planet:Planet)=>{
    try{
        const data = await axios.post(api,{
            Name : planet.name,
            Color : planet.color,
            Size : planet.size,
            Speed : planet.speed,
            RotationSpeed : planet.rotationSpeed,

        } );
        return data;
    }
    catch (error){
        if(axios.isAxiosError(error)){
            console.log("error message " , error.message);
            return error.message;
        }
        else{
            console.log("inexpected error ", error)
            return "an unexpected error has occured";
        }
    }

}
import React from 'react'
import { TribuneArticleType } from '../../Planet.d';
import TribuneArticle from './TribuneArticle';
import {v4 as uuidv4} from "uuid"

interface Props  {
  tribuneArticle:TribuneArticleType[];
}


const TribuneList : React.FC<Props> = ({ tribuneArticle}: Props):JSX.Element => {
  return (
    <>
    
    { 
        tribuneArticle.map((item )=>{
          return <TribuneArticle key={uuidv4()} article={item}/>
        })
     }
    </>
  )
}

export default TribuneList
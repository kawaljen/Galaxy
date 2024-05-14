import React, { useEffect, useState } from 'react'
import { TribuneArticleType } from '../../Planet.d';
import { getTribuneArticles } from '../../Services/TribuneService';
import TribuneList from '../../Component/Tribune/TribuneList';


interface Props  {}

const TribunePage = (props: Props) => {
    const [tribuneArticle, setTribuneArticle] =useState<TribuneArticleType[]>([]); 
    const [serverError, setServerError] = useState<string|null>(null);

    useEffect(()=>{
        const getResult =  async() =>{
            const result = await getTribuneArticles()
            console.log(result)
            if (typeof result === "string"){
              setServerError(result)
            }
            else if (Array.isArray(result.data)){
                setTribuneArticle(result.data);
            }
          }
          getResult();
      },[])


  return (
    <TribuneList tribuneArticle={tribuneArticle} />
  )
}

export default TribunePage
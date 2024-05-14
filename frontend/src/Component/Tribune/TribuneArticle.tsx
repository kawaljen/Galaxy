import React from 'react'
import { TribuneArticleType } from '../../Planet.d'
import './TribuneArticle.scss'

interface Props  {
    key: number,
    article: TribuneArticleType
}
const TribuneArticle : React.FC<Props> = ({ key, article}: Props):JSX.Element => {
  return (
    <div className='article'>
        <h1 className='unifrakturmaguntia-regular'>Galaxy's Tribune</h1>
        <h2>{article.name}</h2>
        <p>{article.content}</p>
        {/* <h2>Where is Newton ?</h2>
        <p>Newton's space has not been created yet, it is just possible to add a planet to the outer galaxy</p>
        <p>We hope to have news soon on that hot matter !</p> */}
    </div>
  )
}

export default TribuneArticle
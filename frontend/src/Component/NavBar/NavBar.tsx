import React from 'react'

interface Props {}

const NavBar = (props: Props) => {
  return (
    <div>
        <a href="/">Home</a>
        <a href="/form">Form</a>
        <a href="/tribune">Tribune</a>
    </div>
  )
}

export default NavBar
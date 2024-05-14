import React from 'react'

interface Props {}

const NavBar = (props: Props) => {
  return (
    <div>
        <a href="/">Home</a>
        <a href="/form">Form</a>
        <a href="/tribune">Tribune</a>
        <a href="/newton">Newton</a>
    </div>
  )
}

export default NavBar
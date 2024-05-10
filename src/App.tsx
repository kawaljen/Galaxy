import React from 'react';
import './App.css';
import './pico.indigo.min.css';
import { Outlet } from 'react-router';
import NavBar from './Component/NavBar/NavBar';
import Galaxy from './Component/Galaxy/Galaxy';
import FormPage from './Pages/FormPage/FormPage';

function App() {
  return (
    <div className="App container">
    <>
    <h1>Galaxy</h1>
     <NavBar/>
     <Outlet/>
     <Galaxy/>
     <FormPage/>
    </>
    </div>
  );
}

export default App;

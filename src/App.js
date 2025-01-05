import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import { useEffect, useState } from 'react'
import Caruix from './img/carUIX.svg'

import Header from './layouts/Header.js';
import Nav from './layouts/Nav.js'
import Home from './pages/Home.js';
import Catalog from './pages/Catalog.js';
import CreateVehicle from './pages/CreateVehicle.js';
import CardPressed from './pages/CardPressed.js';
import EditVehicle from './pages/EditVehicle.js';
import Report from './pages/Report.js';

import useCarStore from './stores/useCarStore.js';
import useToolsStore from './stores/useToolsStore.js';



function App() {
  const setCars = useCarStore((state) => state.setCars)
  const navIsHidden = useToolsStore((state) => state.navIsHidden)

  const [loading, setloading] = useState(true)


  const getCars = async () => {
    try {
      const result =
        await fetch("http://localhost:3002/car/getAll", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
      if (result.ok) {
        console.log("o coiso deu ok")
        const data = await result.json()
        setCars(data.cars)
        setloading(false)
      }
    } catch (error) {
      console.error('erro ao coletar os dados', error)
      setloading(false)
    }
  }


  useEffect(() => {
    getCars()
  }, [])

  if (loading) {
    return (
      <div className="loading">
        <img alt="CarUIX" src={Caruix} />
        <p>Carregando...</p>
      </div>
    )
  }

  return (
    <div className="App">
      <Router>
        < Header />
        <div className="content">
          {!navIsHidden && < Nav />}
          <div className="area">
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route path='/createvehicle' element={<CreateVehicle />}></Route>
              <Route path='/catalog' element={<Catalog />}></Route>
              <Route path='/cardpressed/:id' element={<CardPressed />}></Route>
              <Route path='/edit/:id' element={<EditVehicle />}></Route>
              <Route path='/report' element={<Report />}></Route>
            </Routes>
          </div>
        </div>
      </Router>

    </div>
  );
}

export default App;

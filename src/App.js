import './App.css';
import { Route, Routes, useLocation, useNavigate } from "react-router-dom"
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import Header from './layouts/Header.js';
import Nav from './layouts/Nav.js'
import Home from './pages/Home.js';
import Catalog from './pages/Catalog.js';
import CreateVehicle from './pages/CreateVehicle.js';
import CardPressed from './pages/CardPressed.js';
import EditVehicle from './pages/EditVehicle.js';
import Report from './pages/Report.js';
import Register from './pages/Register.js'
import VerifyUser from './components/VerifyUser.js';
import Configs from './pages/Configs.js'

import useCarStore from './stores/useCarStore.js';
import useToolsStore from './stores/useToolsStore.js';
import useUserIsLogged from './stores/useUserIsLogged.js'
import Login from './pages/Login.js';
import Profile from './pages/Profile.js';



function App() {
  const navigate = useNavigate()
  const setCars = useCarStore((state) => state.setCars)
  const navIsHidden = useToolsStore((state) => state.navIsHidden)
  const controlledRoutes = ['/register', '/login']
  const location = useLocation()
  const [loading, setloading] = useState(true)
  const userIsLogged = useUserIsLogged((state) => state.userIsLogged);
  const logout = useUserIsLogged((state) => state.logout)

  const getCars = async () => {
    try {
      const result =
        await fetch("http://localhost:3002/car/getAll", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: 'include'
        });
      if (result.status === 401) {
        console.log('Token Inválido ou expirado. Retornando a tela de registro');
        navigate('/login')
        logout()
      }
      else if (result.ok) {
        console.log("o coiso deu ok")
        const data = await result.json()
        console.log(data)
        setCars(data.cars)
        setloading(false)
      }
    } catch (error) {
      console.error('erro ao coletar os dados', error)
      setloading(false)
    }
  }



  useEffect(() => {
    userIsLogged === true ? getCars() : navigate('/login') 
  }, [userIsLogged])

  // useEffect(() => {
  //   if (location.state && location.state.message) {
  //     toast.success(`${location.state.message}`)
  //     navigate(location.pathname, { replace: true, state: {} })
  //   }
  // }, [location.state])


  return (
    <div className="App">
      {controlledRoutes.includes(location.pathname) ? null : < Header />}
      <div className={controlledRoutes.includes(location.pathname) ? "contentNoHeader" : "content"}>
        {!controlledRoutes.includes(location.pathname) && (!navIsHidden && < Nav />)}
        <div className="area">
        <div className='notify'>
          <ToastContainer theme='dark'/>
        </div>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route exact path='/' element={<Home />} />
            <Route path='/createvehicle' element={<CreateVehicle />} />
            <Route path='/catalog' element={<Catalog />} />
            <Route path='/cardpressed/:id' element={<CardPressed />} />
            <Route path='/edit/:id' element={<EditVehicle />} />
            <Route path='/report' element={<Report />} />
            <Route path='/configs' element={<Configs />} />
            <Route path='/profile' element={<Profile/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

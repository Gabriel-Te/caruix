import './App.css';
import { Route, Routes, useLocation } from "react-router-dom"
import { useEffect,} from 'react'

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

import useCarStore from './stores/useCarStore.js';
import useToolsStore from './stores/useToolsStore.js';
import useUserIsLogged from './stores/useUserIsLogged.js'
import Login from './pages/Login.js';



function App() {
  const setCars = useCarStore((state) => state.setCars)
  const navIsHidden = useToolsStore((state) => state.navIsHidden)
  const controlledRoutes = ['/register', '/login']
  const location = useLocation()
  // const [loading, setloading] = useState(true)
  const userIsLogged = useUserIsLogged((state) => state.userIsLogged);

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
        // setloading(false)
      }
    } catch (error) {
      console.error('erro ao coletar os dados', error)
      // setloading(false)
    }
  }



  useEffect(() => {
    userIsLogged && getCars()
  }, [userIsLogged])



  return (
    <div className="App">
      {controlledRoutes.includes(location.pathname) ? null : < Header />}
      <div className={controlledRoutes.includes(location.pathname) ? "contentNoHeader" : "content"}>
      {!controlledRoutes.includes(location.pathname) && (!navIsHidden && < Nav />)}
      <div className="area">
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register />} />
          <Route exact path='/' element={<VerifyUser><Home /></VerifyUser>} />
          <Route path='/createvehicle' element={<VerifyUser><CreateVehicle /></VerifyUser>} />
          <Route path='/catalog' element={<VerifyUser><Catalog /></VerifyUser>} />
          <Route path='/cardpressed/:id' element={<VerifyUser><CardPressed /></VerifyUser>} />
          <Route path='/report' element={<VerifyUser><Report /></VerifyUser>} />
        </Routes>
      </div>
    </div>
    </div >
  );
}

export default App;

import Header from './layouts/Header.js';
import Nav from './layouts/Nav.js'
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import Home from './pages/Home.js';
import Catalog from './pages/Catalog.js';
import CreateVehicle from './pages/CreateVehicle.js';
import CardPressed from './pages/CardPressed.js';
s

function App() {
  return (
    <div className="App">
      <Router>
        < Header />
        <div className="content">
          < Nav />
          <div className="area">
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route path='/catalog' element={<Catalog/>}></Route>
              <Route path='/createvehicle' element={<CreateVehicle/>}></Route>
              <Route path='/cardpressed/:id' element={<CardPressed/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>

    </div>
  );
}

export default App;

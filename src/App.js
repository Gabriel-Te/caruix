import Header from './layouts/Header.js';
import Nav from './layouts/Nav.js'
import './App.css';
import { Route, Routes, BrowserRouter as Router } from "react-router-dom"
import MainPage from './pages/MainPage.js';


function App() {
  return (
    <div className="App">
      <Router>
        < Header />
        <div className="content">
          < Nav />
          <div className="area">
            <Routes>
              <Route exact path='/' element={<MainPage/>}></Route>
            </Routes>
          </div>
        </div>
      </Router>

    </div>
  );
}

export default App;

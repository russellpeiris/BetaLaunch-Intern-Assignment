import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Employees from './pages/Employees'
import AddEmployee from './pages/AddEmployee'

function App() {

  return (
    <Router>
       <div className="App">
          <Routes>
            <Route path="/employees" element={<Employees />} />
            <Route path='/add-employee' element={<AddEmployee/>}/>
          </Routes>
     </div>
    </Router>
  )
}

export default App

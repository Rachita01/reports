import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login} from './components/login/index';
import {Dashboard} from './components/dashboard/dashboard';

function App() {
  return (
    <div className="App">
      <Router>
                <Routes>
                    <Route exact path="/" 
                        element={<Login/>} />
  
                    <Route exact path="/dashboard"
                    element={<Dashboard/>}/>

                   
                </Routes>
            </Router>
    </div>
  );
}

export default App;

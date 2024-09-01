import {userState} from 'react'
import './App.css'
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
function App() {
  return (
    <>
    <div className="grid-container">
       <Header/>
      <Sidebar/>
      <Home/>

    </div>

    </>
    
  );
}

export default App;

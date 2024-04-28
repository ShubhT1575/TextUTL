import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import ChatPage from './Pages/ChatPage';
// import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  return (
    <>
    <div className="app">
    <Routes>
    <Route exact path='/' Component={Home}/>
    <Route exact path='/chats' Component={ChatPage}/>
    </Routes>
    </div>
    </>
  );
}

export default App;


import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './home'
import Login from './Login'
import Signin from './Signin'
import Chat from './Chat'
import Video from './Video'

function App() {

  return (
    <>
   <div>

    <Routes>

   <Route  path='/' element ={<Home />} />
   <Route  path='/Login' element ={<Login />} />
   <Route  path='/Signin' element ={<Signin />} />
   <Route  path='/Chat' element ={<Chat />} />
   <Route  path='/Video' element ={<Video />} />




    </Routes>

   </div>
    </>
  )
}

export default App

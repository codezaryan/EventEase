import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/ui/Layout'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Threaters from './pages/Threaters'
import Releases from './pages/Releases'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import NotFound from './components/comman/NotFound'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home/>} />
          <Route path='movies' element={<Movies/>} />
          <Route path='theaters' element={<Threaters/>} />
          <Route path='releases' element={<Releases/>} />
        </Route>
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App

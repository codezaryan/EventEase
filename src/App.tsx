import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import Loader from './components/comman/Loader'
import './App.css'

import Layout from './components/ui/Layout'
// Lazy load all page components for code splitting
// This reduces initial bundle size and improves load performance
const Home = lazy(() => import('./pages/Home'))
const Movies = lazy(() => import('./pages/Movies'))
const Threaters = lazy(() => import('./pages/Threaters'))
const Releases = lazy(() => import('./pages/Releases'))
const Login = lazy(() => import('./components/auth/Login'))
const Register = lazy(() => import('./components/auth/Register'))
const NotFound = lazy(() => import('./components/comman/NotFound'))


function App() {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<Home />} />
          <Route path='movies' element={<Movies />} />
          <Route path='theaters' element={<Threaters />} />
          <Route path='releases' element={<Releases />} />
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App

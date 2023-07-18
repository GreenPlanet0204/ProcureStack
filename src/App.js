import './App.scss'
import { Routes, Route } from 'react-router-dom'
import SignIn from './Pages/Auth/SignIn'
import SignUp from './Pages/Auth/SignUp'
import Forgot from './Pages/Auth/Forgot'
import Reset from './Pages/Auth/Reset'
import Verification from './Pages/Auth/Verification'
import Main from './Pages/Main'
import Search from './Pages/Search'
import Product from './Pages/Product'
import Terms from './Pages/Policy/Terms'
import Privacy from './Pages/Policy/Privacy'
import Cookie from './Pages/Policy/Cookie'

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Main />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot" element={<Forgot />} />
      <Route path="/reset" element={<Reset />} />
      <Route path="/verify" element={<Verification />} />
      <Route path="/search" element={<Search />} />
      <Route path="/product" element={<Product />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/cookie" element={<Cookie />} />
    </Routes>
  )
}

export default App

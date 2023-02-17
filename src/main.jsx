import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {Routes, Route, BrowserRouter} from "react-router-dom"
import './index.css'
import ProfilesDetail from './pages/ProfilesDetail'
import Profiles from './pages/Profiles'
import Home from './pages/Home'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element ={<Home/>}/>
          <Route path='/users' element={<Profiles/>}/>
          <Route path="/users/:id" element={<ProfilesDetail/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

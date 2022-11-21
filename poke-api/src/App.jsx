import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Pokedex from './pages/Pokedex'
import PokedexById from './pages/PokedexById'
import ProtectedRoutes from './pages/ProtectedRoutes'
import Config from './pages/Config'
import {useSelector } from 'react-redux'
import "../src/styles/changeBgcDark.css"

function App() {
  const changeBgcDark=useSelector(state=>state.changeBgcDark)

  return (
    <div className={`App bg-${changeBgcDark}`}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/config" element={<Config />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/pokedex/:id" element={<PokedexById />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App

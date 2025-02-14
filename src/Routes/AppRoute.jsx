import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Components/Login'
import Home from '../Components/Home'
import Header from '../Components/Header'

const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/home"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />

      </Routes>
    </>
  )
}

export default AppRoute
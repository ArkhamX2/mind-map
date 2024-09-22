import { useEffect, useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { publicRoutes, privateRoutes } from "../router"
import Navbar from "../components/navBar"

const AppRouter = () => {
  const history = useNavigate()
  useEffect(() => {
    if (!(window.location.href?.includes('/login') || window.location.href?.includes('/registration')))
      localStorage.setItem("lastURL", window.location.href)
  }, [history])
  return (
    <>
      <div style={{position:"fixed"}}>
        <Navbar />
      </div>
      <Routes>
        {publicRoutes.map(route =>
          <Route
            Component={route.element}
            path={route.path}
            key={route.path} />
        )}
        <Route path="*" element={<Navigate to="/agregator" replace />} />
      </Routes>
    </>
  )
}

export default AppRouter
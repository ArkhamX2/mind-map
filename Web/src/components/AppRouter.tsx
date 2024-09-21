import { useState } from "react"
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"
import { publicRoutes, privateRoutes } from "../router"
import Navbar from "../components/navBar"

const AppRouter = () => {
    return (
        <>
      <div>
        <Navbar/>
      </div>
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    Component={route.element}
                    path={route.path}
                    key={route.path} />
            )}
        </Routes>
        </>
    )
}

export default AppRouter
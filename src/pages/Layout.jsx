import React from "react"
import Header from "../components/PreHeader"
import Navbar from "../components/Navbar"
import { Outlet } from "react-router"

const Layout = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto px-2">
      <Header />
      <Navbar />
      <main className="mt-35">
        <Outlet />
      </main>
    </div>
  )
}

export default Layout

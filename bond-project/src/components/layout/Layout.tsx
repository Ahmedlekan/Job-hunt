import Navbar from "./Navbar"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <div className=" relative">
        <Navbar />
        <main className=" flex-grow">
          <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout
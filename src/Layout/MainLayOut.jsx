import Header from "../Component/Header"
import { Outlet } from "react-router"

const MainLayOut = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default MainLayOut
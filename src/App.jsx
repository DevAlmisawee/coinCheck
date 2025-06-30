import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router"
import MainLayOut from "./Layout/MainLayOut";
import TableContent from "./Component/TableContent";
import './CSS/Style.css';


function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayOut />}>
        <Route index element={<TableContent />} />
      </Route>
    )
  );
  return (
    <>
      {/* <CoinInfo /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App

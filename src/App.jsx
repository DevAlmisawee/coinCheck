import { 
  Route, 
  RouterProvider, 
  createHashRouter,  // Use createHashRouter instead of createBrowserRouter
  createRoutesFromElements 
} from "react-router-dom";  // Make sure to import from "react-router-dom"
import MainLayOut from "./Layout/MainLayOut";
import TableContent from "./Component/TableContent";
import './CSS/Style.css';

function App() {
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayOut />}>
        <Route index element={<TableContent />} />
      </Route>
    )
  );
  
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
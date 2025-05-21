import { BrowserRouter, Routes , Route } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PageNotFound from "./pages/PageNotFound"
function App() {
  
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path="/dashboard" element={<Dashboard/>}/>
    <Route path="/" element={<Login/>}/>
    {/* <Route path="/register" element={<Register/>}/>
     <Route path="*" element={<PageNotFound/>}/> */}
  </Routes>
  </BrowserRouter>
  
    </>
  );
}
export default App;

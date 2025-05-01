import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayouts  from "./layouts/MainLayouts"
import Home from "./pages/Home/home"
import About from "./pages/About"


function App() {
 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayouts/>}>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainLayouts  from "./layouts/MainLayouts"
import Home from "./pages/Home/home"
import About from "./pages/About"
import Project from "./pages/Project/Projects"
import Contact from "./pages/Contact"


function App() {
 

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayouts/>}>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<h1>Not Found</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

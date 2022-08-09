import { BrowserRouter, Route, Routes } from "react-router-dom"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { Portfolio } from "./pages/Portfolio"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path={'/'} />
        <Route element={<Portfolio/>} path={'/portfolio'} />
        <Route element={<About/>} path={'/about'} />
        <Route element={<Contact/>} path={'/contact'} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

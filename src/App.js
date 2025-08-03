import { useContext } from "react"
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import LandingPage from "./components/LandingPage"
import Header from "./components/Header"
import DoctorSpecificPage from "./components/DoctorSpecificPage"
import NotFound from "./components/NotFound"
import { DoctorContext, DoctorProvider } from "./context/doctorsContext"

const App = () => {
  return(
    <DoctorProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route Component={LandingPage} exact path="/" />
          <Route exact path="/doctor/:doctorId" Component={DoctorSpecificPage} />
          <Route path="*" Component={NotFound} />
        </Routes>
      </BrowserRouter>
    </DoctorProvider>
  )
}

export default App
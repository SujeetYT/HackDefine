import React from "react"
import "./styles.css"
import Home from "./components/Home"
import About from "./components/About"
import Volunteer from "./components/Volunteer"
import {Route, Routes} from "react-router-dom"

export default function App(){
  return(
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="/about" element={<About />}/>
      <Route exact path="/volunteer" element={<Volunteer />}/>
    </Routes>
  )
}
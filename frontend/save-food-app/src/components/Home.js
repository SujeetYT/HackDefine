import React from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import Recentevents from "./Recentevents"
import cardData from "../data"
export default function Home(){
    const cardElements = cardData.map((item)=>{
        return(
          <Recentevents 
            {...item}
          />
        )
      })
    return(
        <div>
            <Navbar/>
            <Hero />
            <h1>Most Recent</h1>
            <section className="cards-list">
                {cardElements}
            </section>
        </div>
    )
}
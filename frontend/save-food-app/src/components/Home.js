import React, { useEffect, useState } from "react"
import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import Recentevents from "./Recentevents"
// import cardData from "../data"
// import data from "../data"
export default function Home(){
  const [data, setData] = useState()
  console.log(data);
  useEffect(() => {
    const volunteer = async (userId)=>{
      try{
          const res = await fetch(`http://localhost:3001/`, {
              method : "GET",
          })
      
          const result = await res.json();
          if (res.status===200) {
            setData(result);
          } else {
              console.log({result});
          }
      }catch(err){
          console.log(err)
      }
     
  }
  volunteer()
  }, [])
    const cardElements = data?.map((item)=>{
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
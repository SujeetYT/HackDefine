import React from "react"
import heroimg from "../images/heroImg.svg"
export default function Hero(){
    return(
        <section className="heroSection">
            <img className="heroImg" src={heroimg}/>
            <div>
                <input className="input" placeholder="enter your location"></input>
                <button type="submit">Submit</button>
            </div>
        </section>
    )
}
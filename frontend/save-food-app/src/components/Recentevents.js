import React from "react"
import img from "../images/eventimg.png"

export default function Recentevents(props){
    console.log({props});
    return(
        <div className="card">
            <div className="recent-Img">
                <img className="cardImg" src={img} alt="img"></img>
            </div>
            <h3>{props.Name}</h3>
            <p>{props.Address}</p>
        </div>
    )
}
import React from "react"

export default function Recentevents(props){

    return(
        <div className="card">
            <div className="recent-Img">
                <img className="cardImg" src={process.env.PUBLIC_URL + `/card-images/${props.imgUrl}`} alt="img"></img>
            </div>
            <h3>{props.title}</h3>
            <p>{props.place}</p>
        </div>
    )
}
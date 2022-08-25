import { useState } from 'react';
import storm from "../assests/storm.jpg"
import volcano from "../assests/volcano.jpeg"
import fire from "../assests/fire.jpeg"
import { IoLogoGoogle } from "react-icons/io";
import { AiOutlineCloseCircle } from "react-icons/ai";

const InfoBox = ({ info }) => {
    const searchURL = String(info.title).replace(/ /g,"+");

    return (
        <div className="info-box">
            <div className="event-detail">
                <AiOutlineCloseCircle className="close-event-detail" onClick={ () => document.querySelector(".info-box").style.display = "none" }/>
                <h2>Event Info</h2>
                <ul> 
                    <li>ID: <strong>{ info.id }</strong></li>
                    <li>Type: <strong>{ info.cat }</strong></li>
                    <li>Name: <strong>{ info.title }</strong></li>
                </ul>
                    <a href={ `https://www.google.com/search?q=${searchURL}` } target="_blank">
                        <button>
                            <IoLogoGoogle className="button-icon"/>
                            <b>Learn more</b>
                        </button>
                    </a>
            </div>
            <div>
                { info.cat === "Volcanoes" && <img src={ volcano } /> }
                { info.cat === "Wildfires" && <img src={ fire } /> }
                { info.cat === "Severe Storms" && <img src={ storm } /> }
            </div>

        </div>
    )
}

export default InfoBox
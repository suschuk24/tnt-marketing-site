import React from "react";
import './LocationCard.css'
import logo from "../../logo.svg";

type Props = {
    location: any
}

const LocationCard: React.FC<Props> = ({location}) => {
    return (
        <div className='LocationCard-card'>
            <img src={logo} className="LocationCard-logo" alt="logo" />
            <p className='LocationCard-detail'>{location.name}</p>
            <p className='LocationCard-detail'> Ages: {location.minAge} - {location.maxAge}</p>
        </div>
    )
}

export default LocationCard

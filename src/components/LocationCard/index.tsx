import React from "react";
import './LocationCard.css'

type Props = {
    location: {
        name: string
        logo: any
        minAge: string
        maxAge: string
        link: string
    }
}

const LocationCard: React.FC<Props> = ({location}) => {
    return (
        <section className='LocationCard-card'>
            <img src={location.logo} className="LocationCard-logo" alt="logo"/>
            <p className='LocationCard-detail'>{location.name}</p>
            <p className='LocationCard-detail'> Ages: {location.minAge} - {location.maxAge}</p>
            <a href={'/locations' + location.link} onClick={() => console.log("clicked")}>
                <button className='LocationCard-button'>Learn More</button>
            </a>
        </section>
    )
}

export default LocationCard

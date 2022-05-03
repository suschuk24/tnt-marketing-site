import React from "react";
import './About.css'

type Props = {
    name: string
    description: string
    tagLine: string
    address: string
    address1?: string

    hours: string
    phone: string
}
const About: React.FC<Props> = ({name, description, tagLine, address, address1, hours, phone}) => {
    return (
        <div className='About-container'>
            <div>
                <h2 className='About-tag-line'>{tagLine}</h2>
                <p>{description}</p>
            </div>
        </div>

    )
}
export default About

import React from "react";
import logo from '../../../../../assets/tnt-gg-logo.png'

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
        <div>
            <img src={logo} />
            <div>
                <h3>{phone}</h3>
                <p>{address}</p>
                <p>{address1}</p>
            </div>
            <h2>{name}</h2>
            <div>
                <h4>{tagLine}</h4>
                <p>{description}</p>
            </div>
        </div>

    )
}
export default About

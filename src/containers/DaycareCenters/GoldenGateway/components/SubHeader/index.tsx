import React from "react";
import './SubHeader.css'

type Props = {
    logo: any
    buttonData: Array<{ name: string, link: string }>
}

const SubHeader: React.FC<Props> = ({logo, buttonData}) => {
    return (
        <div className='SubHeader-container'>
            {buttonData.map((button, i) => (
                <a key={i} className='SubHeader-button' href={button.link}> {button.name}</a>
            ))}
        </div>
    )
}

export default SubHeader

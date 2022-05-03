import React from "react";
import './TopLine.css'

type Props = {
    type: string
}
const TopLine: React.FC<Props> = ({type}) => {
    switch (type) {
        case 'primary' :
            return (
                <div className='TopLine-primary' />
            )
        case 'secondary' :
            return (
                <div className='TopLine-secondary' />
            )
        default:
            return (<></>)
    }
}

export default TopLine

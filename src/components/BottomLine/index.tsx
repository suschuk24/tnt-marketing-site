import React from "react";
import './BottomLine.css'

type Props = {
    type: string
}
const BottomLine: React.FC<Props> = ({type}) => {
    switch (type) {
        case 'primary' :
            return (
                <div className='BottomLine-primary'/>
            )
        case 'secondary' :
            return (
                <div className='BottomLine-secondary'/>
            )
        default:
            return (<></>)
    }
}

export default BottomLine

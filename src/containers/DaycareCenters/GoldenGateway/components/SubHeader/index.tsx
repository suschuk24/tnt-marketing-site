import React from "react";
import './SubHeader.css'

type Props = {
    logo: any
    buttonData: Array<{ name: string, link: string }>
}

const SubHeader: React.FC<Props> = ({logo, buttonData}) => {
    return (
        <div className='SubHeader-container'>
            {/*<a href='/'>*/}
            {/*    <img src={logo} className='App-logo' alt='logo' />*/}
            {/*</a>*/}
            <div className='SubHeader-right'>
                {buttonData.map(button => (
                    <a className='SubHeader-button' href={button.link}> {button.name}</a>
                ))}
            </div>
        </div>
    )
}

export default SubHeader

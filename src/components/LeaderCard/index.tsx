import React from "react";
import './LeaderCard.css'
import logo from "../../logo.svg";
type Props = {
    leader: any
}

const LeaderCard: React.FC<Props> = ({leader}) => {
    return (
        <div className='LeaderCard-container'>
            <div className='LeaderCard-row'>
                <img src={logo} className="LeaderCard-image" alt="logo" />
                <div className='LeaderCard-details'>
                    <div className='LeaderCard-name'>
                        {leader.name}
                    </div>
                    <div className='LeaderCard-about'>
                        {leader.about}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderCard

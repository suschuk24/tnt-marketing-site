import React from "react";
import './LeaderCard.css'
type Props = {
    leader: any
}

const LeaderCard: React.FC<Props> = ({leader}) => {
    return (
        <section className='LeaderCard-container'>
            <div className='LeaderCard-row'>
                <img src={leader.image} className="LeaderCard-image" alt="logo" />
                <div className='LeaderCard-details'>
                    <h3 className='LeaderCard-name'>
                        {leader.name}
                    </h3>
                    <p className='LeaderCard-about'>
                        {leader.about}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default LeaderCard

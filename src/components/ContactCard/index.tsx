import React from "react";
import './ContactCard.css'
type Props = {
  contactInfo: any
}

const ContactCard: React.FC<Props> = ({contactInfo}) => {
    return (
        <div className='ContactCard-container'>
            <img src={contactInfo.image} className='ContactCard-logo' alt='logo' />
            {/*<h4 className='ContactCard-name'>*/}
            {/*    {contactInfo.name}*/}
            {/*</h4>*/}
            <div className='ContactCard-detail'>
                <p className='ContactCard-detail-line'>
                    {contactInfo.address}
                </p>
                <p className='ContactCard-detail-line'>
                    {contactInfo.address1}
                </p>
            </div>
            <br />
            <div className='ContactCard-detail'>
                <a href ={'tel:+1' + contactInfo.phoneNumber} className='ContactCard-detail-line'>
                    {contactInfo.phoneNumber}
                </a>
                <a href = {'mailto:' + contactInfo.emailAddress} className='ContactCard-detail-line'>
                    {contactInfo.emailAddress}
                </a>
            </div>
        </div>
    );
}

export default ContactCard

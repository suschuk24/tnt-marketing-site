import React from "react";
import './ContactCard.css'
type Props = {
  contactInfo: any
}

const ContactCard: React.FC<Props> = ({contactInfo}) => {
    return (
        <div className='ContactCard-container'>
            <div className='ContactCard-name'>
                {contactInfo.name}
            </div>
            <div className='ContactCard-address'>
                {contactInfo.address}
            </div>
            <div className='ContactCard-address'>
                {contactInfo.address1}
            </div>
            <div className='ContactCard-element'>
                {contactInfo.phoneNumber}
            </div>
            <div className='ContactCard-element2'>
                {contactInfo.emailAddress}
            </div>
        </div>
    );
}

export default ContactCard

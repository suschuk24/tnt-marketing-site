import React from "react";
import './ContactCard.css'
type Props = {
  contactInfo: any
}

const ContactCard: React.FC<Props> = ({contactInfo}) => {
    return (
        <div className='ContactCard-container'>
            <h4 className='ContactCard-name'>
                {contactInfo.name}
            </h4>
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
                <a className='ContactCard-detail-line'>
                    {contactInfo.phoneNumber}
                </a>
                <br />
                <a className='ContactCard-detail-line'>
                    {contactInfo.emailAddress}
                </a>

            </div>
        </div>
    );
}

export default ContactCard

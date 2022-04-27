import ContactCard from "../../../../components/ContactCard";
import './ContactGrid.css'
const ContactGrid = () => {
    const places = [
        {
            name: 'Truks-N-Trykes 2',
            address: '5000 S MacArthur Lane, Suite 101',
            address1: 'Sioux Falls, SD 57108',
            phoneNumber: '605-274-0404',
            emailAddress: 't-n-t-2@live.com'
        },
        {
            name: 'Truks-N-Trykes NurseryCare',
            address: '4825 S Hosta Avenue',
            address1: 'Sioux Falls, SD 57110',
            phoneNumber: '605-900-6183',
            emailAddress: 'tntnc.info@gmail.com'
        },
        {
            name: 'Truks-N-Trykes PlayCare',
            address: '3400 Centerﬁeld Place',
            address1: 'Sioux Falls, SD 57110',
            phoneNumber: '605-371-9770',
            emailAddress: 'tntplaycare@gmail.com'
        },
        {
            name: 'Truks-N-Trykes 3',
            address: '2600 S Minnesota Ave.',
            address1: 'Sioux Falls, SD 57105',
            phoneNumber: '605-274-1819',
            emailAddress: 'missietnt3@outlook.com'
        },
        {
            name: 'Truks-N-Trykes Prep',
            address: '4801 S Hosta Avenue',
            address1: 'Sioux Falls, SD 57110',
            phoneNumber: '605-900-6340',
            emailAddress: 'Email 5'
        },
        {
            name: 'Truks-N-Trykes Golden Gateway',
            address: '5700 E Tahoe Street',
            address1: 'Sioux Falls, SD 57110',
            phoneNumber: '(605) 271-3668',
            emailAddress: 'tntgoldengateway@gmail.com'
        }
    ]

    return (
        <div className='ContactGrid-container'>
            <h4 className='ContactGrid-title' >
                Contact Us
            </h4>
            <div className='ContactGrid-grid' >
                {places.map(place =><ContactCard contactInfo={place} />)}
            </div>
        </div>
    );
}

export default ContactGrid

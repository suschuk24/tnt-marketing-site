import ContactCard from "../../components/ContactCard";
import './ContactGrid.css'
import tntGgLogo from '../../assets/centers/tnt-gg-logo.png'
import tnt2Logo from '../../assets/centers/tnt-2-logo.png'
import tntNcLogo from '../../assets/centers/tnt-nc-logo.png'
import tntPcLogo from '../../assets/centers/tnt-pc-logo.png'
import tnt3Logo from '../../assets/centers/tnt-3-logo.png'
import tntPrepLogo from '../../assets/centers/tnt-prep-logo.png'

const ContactGrid = () => {
    const places = [
        {
            name: 'Truks-N-Trykes 2',
            address: '5000 S MacArthur Lane, Suite 101',
            address1: 'Sioux Falls, SD 57108',
            phoneNumber: '605-274-0404',
            emailAddress: 't-n-t-2@live.com',
            image: tnt2Logo
        },
        {
            name: 'Truks-N-Trykes NurseryCare',
            address: '4825 S Hosta Avenue',
            address1: 'Sioux Falls, SD 57110',
            phoneNumber: '605-900-6183',
            emailAddress: 'tntnc.info@gmail.com',
            image: tntNcLogo
        },
        {
            name: 'Truks-N-Trykes PlayCare',
            address: '3400 Centerﬁeld Place',
            address1: 'Sioux Falls, SD 57110',
            phoneNumber: '605-371-9770',
            emailAddress: 'tntplaycare@gmail.com',
            image: tntPcLogo
        },
        {
            name: 'Truks-N-Trykes 3',
            address: '2600 S Minnesota Ave.',
            address1: 'Sioux Falls, SD 57105',
            phoneNumber: '605-274-1819',
            emailAddress: 'missietnt3@outlook.com',
            image: tnt3Logo
        },
        {
            name: 'Truks-N-Trykes Prep',
            address: '4801 S Hosta Avenue',
            address1: 'Sioux Falls, SD 57110',
            phoneNumber: '605-900-6340',
            emailAddress: 'Email 5',
            image: tntPrepLogo
        },
        {
            name: 'Truks-N-Trykes Golden Gateway',
            address: '5700 E Tahoe Street',
            address1: 'Sioux Falls, SD 57110',
            phoneNumber: '(605) 271-3668',
            emailAddress: 'tntgoldengateway@gmail.com',
            image: tntGgLogo
        }
    ]

  return (
    <div id='contact' className='ContactGrid-container'>
      <div className='ContactGrid-title'>Contact Us</div>
      <div className='ContactGrid-grid'>
          {places.slice(0,2).map((place) => (
              <ContactCard contactInfo={place} />
          ))}
          {places.slice(2).map((place) => (
              <ContactCard contactInfo={place} />
          ))}
      </div>
    </div>
  );
};

export default ContactGrid;

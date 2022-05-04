import './ContactGrid.css'
import ContactCard from "../../components/ContactCard";
import tntGgLogo from '../../assets/centers/tnt-gg-logo.webp'
import tnt2Logo from '../../assets/centers/tnt-2-logo.webp'
import tntNcLogo from '../../assets/centers/tnt-nc-logo.webp'
import tntPcLogo from '../../assets/centers/tnt-pc-logo.webp'
import tnt3Logo from '../../assets/centers/tnt-3-logo.webp'
import tntPrepLogo from '../../assets/centers/tnt-prep-logo.webp'

const ContactGrid = () => {
    const places = [
        {
            name: 'Truks-N-Trykes 2',
            address: '5000 S MacArthur Lane, Suite 101',
            address1: 'Sioux Falls, SD 57108',
            phoneNumber: '605-274-0404',
            emailAddress: 't-n-t-2@live.com',
            logo: tnt2Logo
        },
        {
            name: 'Truks-N-Trykes NurseryCare',
            address: '4825 S Hosta Avenue',
            address1: 'Sioux Falls, SD 57110',
            phoneNumber: '605-900-6183',
            emailAddress: 'tntnc.info@gmail.com',
            logo: tntNcLogo
        },
        {
            name: 'Truks-N-Trykes PlayCare',
            address: '3400 Centerﬁeld Place',
            address1: 'Sioux Falls, SD 57110',
            phoneNumber: '605-371-9770',
            emailAddress: 'tntplaycare@gmail.com',
            logo: tntPcLogo
        },
        {
            name: 'Truks-N-Trykes 3',
            address: '2600 S Minnesota Ave.',
            address1: 'Sioux Falls, SD 57105',
            phoneNumber: '605-274-1819',
            emailAddress: 'missietnt3@outlook.com',
            logo: tnt3Logo
        },
        {
            name: 'Truks-N-Trykes Prep',
            address: '4801 S Hosta Avenue',
            address1: 'Sioux Falls, SD 57110',
            phoneNumber: '605-900-6340',
            emailAddress: 'Email 5',
            logo: tntPrepLogo
        },
        {
            name: 'Truks-N-Trykes Golden Gateway',
            address: '5700 E Tahoe Street',
            address1: 'Sioux Falls, SD 57110',
            phoneNumber: '(605) 271-3668',
            emailAddress: 'tntgoldengateway@gmail.com',
            logo: tntGgLogo
        }
    ]

  return (
    <section id='contact' className='ContactGrid-container'>
      <h2 className='ContactGrid-title'>Contact Us</h2>
      <div className='ContactGrid-grid'>
          {places.slice(0,2).map((place) => (
              <ContactCard contactInfo={place} />
          ))}
          {places.slice(2).map((place) => (
              <ContactCard contactInfo={place} />
          ))}
      </div>
    </section>
  );
};

export default ContactGrid;

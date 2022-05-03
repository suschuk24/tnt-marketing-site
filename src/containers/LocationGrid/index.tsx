import LocationCard from "../../components/LocationCard";
import './LocationGrid.css'
import tntGgLogo from '../../assets/centers/tnt-gg-logo.png'
import tnt2Logo from '../../assets/centers/tnt-2-logo.png'
import tntNcLogo from '../../assets/centers/tnt-nc-logo.png'
import tntPcLogo from '../../assets/centers/tnt-pc-logo.png'
import tnt3Logo from '../../assets/centers/tnt-3-logo.png'
import tntPrepLogo from '../../assets/centers/tnt-prep-logo.png'
import ReactCardFlip from "react-card-flip";
import {useState} from "react";
import ContactCard from "../../components/ContactCard";

const LocationGrid = () => {
    const [isFlipped, setIsFlipped] = useState(false)

    const locations = [{
        name: 'Truks-N-Trykes Golden Gateway',
        minAge: '6 weeks',
        maxAge: '12 years',
        logo: tntGgLogo,
        link: '/golden-gateway',
        address: '5700 E Tahoe Street',
        address1: 'Sioux Falls, SD 57110',
        phoneNumber: '(605) 271-3668',
        emailAddress: 'tntgoldengateway@gmail.com',
    },{
        name: 'Truks-N-Trykes Nursery Care',
        minAge: '6 weeks',
        maxAge: '3 years',
        logo: tntNcLogo,
        link: '/golden-gateway',
        address: '4825 S Hosta Avenue',
        address1: 'Sioux Falls, SD 57110',
        phoneNumber: '605-900-6183',
        emailAddress: 'tntnc.info@gmail.com',
    },{
        name: 'Truks-N-Trykes 2',
        minAge: '6 weeks',
        maxAge: '12 years',
        logo: tnt2Logo,
        link: '/golden-gateway',
        address: '5000 S MacArthur Lane, Suite 101',
        address1: 'Sioux Falls, SD 57108',
        phoneNumber: '605-274-0404',
        emailAddress: 't-n-t-2@live.com',
    },{
        name: 'Truks-N-Trykes Playcare',
        minAge: '2 years',
        maxAge: '12 years',
        logo: tntPcLogo,
        link: '/golden-gateway',
        address: '3400 Centerﬁeld Place',
        address1: 'Sioux Falls, SD 57110',
        phoneNumber: '605-371-9770',
        emailAddress: 'tntplaycare@gmail.com',
    },{
        name: 'Truks-N-Trykes 3',
        minAge: 'preschool',
        maxAge: '5 years',
        logo: tnt3Logo,
        link: '/golden-gateway',
        address: '2600 S Minnesota Ave.',
        address1: 'Sioux Falls, SD 57105',
        phoneNumber: '605-274-1819',
        emailAddress: 'missietnt3@outlook.com',
    },{
        name: 'Truks-N-Trykes Prep',
        minAge: 'preschool',
        maxAge: 'preschool',
        logo: tntPrepLogo,
        link: '/golden-gateway',
        address: '4801 S Hosta Avenue',
        address1: 'Sioux Falls, SD 57110',
        phoneNumber: '605-900-6340',
        emailAddress: 'Email 5',
    }];


    const handleClick = (event: any) => {
        event.preventDefault();
        setIsFlipped(!isFlipped);
    }

    return (
        <div className='LocationGrid-container'>
            <h2 className='LocationGrid-title'> Locations</h2>
            <div className='LocationGrid-buttons'>
                {!isFlipped ? (
                    <button className='LocationGrid-button' onClick={handleClick}>{'View Contact Info >'}</button>
                ) : (
                    <button className='LocationGrid-button' onClick={handleClick}> {'< View Age Ranges'}</button>
                )}
            </div>
            <div className='Location-grid'>
                {locations.slice(0, 2).map(location => (
                    <ReactCardFlip isFlipped={isFlipped}>
                        <LocationCard location={location} />
                        <ContactCard contactInfo={location} />
                    </ReactCardFlip>
                ))}
                {locations.slice(2).map(location => (
                    <ReactCardFlip isFlipped={isFlipped}>
                        <LocationCard location={location} />
                        <ContactCard contactInfo={location} />
                    </ReactCardFlip>
                ))}
            </div>
        </div>
    )
}

export default LocationGrid

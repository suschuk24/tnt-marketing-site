import LocationCard from "../../../../components/LocationCard";
import './LocationGrid.css'
import tntGgLogo from '../../../../assets/centers/tnt-gg-logo.png'
import tnt2Logo from '../../../../assets/centers/tnt-2-logo.png'
import tntNcLogo from '../../../../assets/centers/tnt-nc-logo.png'
import tntPcLogo from '../../../../assets/centers/tnt-pc-logo.png'
import tnt3Logo from '../../../../assets/centers/tnt-3-logo.png'
import tntPrepLogo from '../../../../assets/centers/tnt-prep-logo.png'
import TopLine from "../../../../components/TopLine";
import BottomLine from "../../../../components/BottomLine";

const LocationGrid = () => {
    const locations = [{
        name: 'Truks-N-Trykes Golden Gateway',
        minAge: '6 weeks',
        maxAge: '12 years',
        logo: tntGgLogo,
        link: '/golden-gateway'
    },{
        name: 'Truks-N-Trykes Nursery Care',
        minAge: '6 weeks',
        maxAge: '3 years',
        logo: tntNcLogo,
        link: '/golden-gateway'
    },{
        name: 'Truks-N-Trykes 2',
        minAge: '6 weeks',
        maxAge: '12 years',
        logo: tnt2Logo,
        link: '/golden-gateway'
    },{
        name: 'Truks-N-Trykes Playcare',
        minAge: '2 years',
        maxAge: '12 years',
        logo: tntPcLogo,
        link: '/golden-gateway'
    },{
        name: 'Truks-N-Trykes 3',
        minAge: 'preschool',
        maxAge: '5 years',
        logo: tnt3Logo,
        link: '/golden-gateway'
    },{
        name: 'Truks-N-Trykes Prep',
        minAge: 'preschool',
        maxAge: 'preschool',
        logo: tntPrepLogo,
        link: '/golden-gateway'
    }];

    return (
        <div className='LocationGrid-container'>
            <h2 className='LocationCard-title'> Locations</h2>
            <div className='Location-grid'>
                {locations.slice(0, 2).map(location => <LocationCard location={location} />)}
                {locations.slice(2).map(location => <LocationCard location={location} />)}
            </div>
            <BottomLine type='secondary' />
        </div>
    )
}

export default LocationGrid

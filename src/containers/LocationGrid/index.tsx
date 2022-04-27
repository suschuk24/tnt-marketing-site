import LocationCard from "../../components/LocationCard";
import './LocationGrid.css'

const LocationGrid = () => {
    const locations = [{
        name: 'Truks-N-Trykes Golden Gateway',
        minAge: '6 weeks',
        maxAge: '12 years'
    },{
        name: 'Truks-N-Trykes Nursery Care',
        minAge: '6 weeks',
        maxAge: '3 years'
    },{
        name: 'Truks-N-Trykes 2',
        minAge: '6 weeks',
        maxAge: '12 years'
    },{
        name: 'Truks-N-Trykes Playcare',
        minAge: '2 years',
        maxAge: '12 years'
    },{
        name: 'Truks-N-Trykes 3',
        minAge: 'preschool',
        maxAge: '5 years'
    },{
        name: 'Truks-N-Trykes Prep',
        minAge: 'preschool',
        maxAge: 'preschool'
    }];

    return (
        <div id='locations' className='LocationGrid-container'>
            <div className='LocationCard-title'> Locations </div>
            <div className='Location-grid'>
                {locations.map(location => <LocationCard location={location} />)}
            </div>
        </div>
    )
}

export default LocationGrid

import LocationCard from "../../components/LocationCard";
import './LocationGrid.css'

const LocationGrid = () => {
    const locations = [
        {
            name: 'Daycare 1'
        },
        {
            name: 'Daycare 2'
        },
        {
            name: 'Daycare 3'
        },
        {
            name: 'Daycare 4'
        },
        {
            name: 'Daycare 5'
        },
        {
            name: 'Daycare 6'
        }
    ];

    return (
        <div className='LocationGrid-container'>
        {/*    Location cards will go here...*/}
            <p className='Location-card'>Locations Cards here: </p>
            <div className='Location-grid'>
                {locations.map(location => <LocationCard location={location} />)}
            </div>
        </div>
    )
}

export default LocationGrid

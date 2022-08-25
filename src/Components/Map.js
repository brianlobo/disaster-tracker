import { useState } from 'react';
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import InfoBox from './InfoBox';

const Map = ({ center, zoom, eventData }) => {
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.map(ev => {
        let cat = ev.categories[0].id
        if (cat === "wildfires" || cat === "severeStorms" || cat === "volcanoes") {
            return (
                <Marker 
                    key={ ev.id }
                    lat={ ev.geometry[0].coordinates[1] }
                    lng={ ev.geometry[0].coordinates[0] }
                    cat={ cat }
                    onClick={() => {
                        if (locationInfo){document.querySelector(".info-box").style.display = "flex";}
                        setLocationInfo({ id: ev.id, title: ev.title, cat: ev.categories[0].title});
                    }}
                />
            )
        }
        return null
    });

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_KEY}}
                defaultCenter={ center }
                defaultZoom={ zoom }
                options={{ zoomControlOptions: { position: 8 }}}>
                { markers }
            </GoogleMapReact>
            { locationInfo && <InfoBox info={locationInfo} /> }
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 35.3265,
        lng: -100.8756
    },
    zoom: 4
}

export default Map
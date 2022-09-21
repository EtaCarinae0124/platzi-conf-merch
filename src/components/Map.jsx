import React from 'react';
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

function Map({ data }) {
    const mapStyle = {
        height: '50vh',
        width: '100%'
    }

    const defaultCenter = {
        lat: data.lat,
        lng: data.lng
    }

  return (
    <LoadScript googleMapsApiKey='AIzaSyAr90iFmPxMur1M2jZ4BZkNm_48dJDa53Y'>
        <GoogleMap
            mapContainerStyle={mapStyle}
            zoom={9}
            center={defaultCenter}
        >
            <Marker 
                position={defaultCenter} 
            />

        </GoogleMap>
    </LoadScript>
  )
}

export { Map };
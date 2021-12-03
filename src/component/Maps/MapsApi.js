import React, { useEffect, useState } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

export default function MapsApi() {
    
    const mapStyles = {        
        height: "60vh",
        width: "100%"};

    const [maps, setmaps] = useState({
        latitude: null,
        longitude: null
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            function(position) {
                setmaps({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                })
            },

        );
    }, [])

    return (
        <LoadScript
          googleMapsApiKey='AIzaSyC6PlAlaL-9Fz4O4KwoKxGAXnnMbuKxJO4'>
           <GoogleMap
             mapContainerStyle={mapStyles}
             zoom={16}
             center={{
                lat: maps.latitude, 
                lng: maps.longitude
                }}
           />
        </LoadScript>
     )
}
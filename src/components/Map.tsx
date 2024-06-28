import { MapContainer, TileLayer, Marker } from "react-leaflet"
import { Place } from "../api/Place"
import { useEffect, useRef } from "react"
import type {Map as LeafletMap } from 'leaflet'


interface MapProps {
    place: Place | null
}

export default function Map({ place }:MapProps ){
    const mapRef = useRef<LeafletMap | null>(null)

    useEffect(() => {
        if(mapRef.current && place){
            mapRef.current.flyTo([place.latiitude, place.longitude])
        }
    },[place])

    return <MapContainer 
        ref={mapRef}
        center={[40.7, -74]}
        zoom={12}
        scrollWheelZoom
        className="h-full"
    >  
    <TileLayer  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        { place && <Marker position={[place.latiitude, place.longitude]}/> }
    </MapContainer>
}
//This this is useless. It doesnt work bc

import axios from "axios";
import getGeolocation from "./geolocation";

async function  getGeocodingData() {
    try{
        const positions = await getGeolocation();
        const { latitude,longitude } = positions.coords;
        const openStreetMap = axios.create({
            baseURL:'nominatim.openstreetmap.org/reverse',
            params:{
                format: 'geojson',
                lat: latitude,
                lon: longitude
            }
        })
        return openStreetMap;
    } catch(error) {
        console.log(error);
    }
}
// https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=26.1157917&lon=91.7085933
export default  getGeocodingData;
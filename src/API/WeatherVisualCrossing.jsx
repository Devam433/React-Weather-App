import axios from "axios"
import getGeolocation from "../Utils/geolocation";

const APIKEY = import.meta.env.VITE_API_KEY;

async function getCurrentWeatherData() {
    try {
        const position = await getGeolocation();
        const { latitude,longitude } = position.coords;
        const openWeatherApi = axios.create({
            baseURL:`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${latitude},${longitude}`,
            params: {
                aggregateHours: '24',
                key: APIKEY,
                contentType: 'json',
                unitGroup: 'metric'
            }
        })
        return openWeatherApi;
    } catch(err){
        console.log(err);
    }
}


export default getCurrentWeatherData;
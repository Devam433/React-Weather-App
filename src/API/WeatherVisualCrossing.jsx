import axios from "axios"
import getGeolocation from "../Utils/geolocation";
//26.655041,92.772453 tezpur coords
const APIKEY='YNWMKP6R55KU3E4VNFQ5M38AY';

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
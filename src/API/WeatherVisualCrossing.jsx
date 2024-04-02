import axios from "axios"
//26.655041,92.772453 tezpur coords
const APIKEY='';

async function getGeolocation() {
    try{
        const position = new Promise((resolve,reject) => {
            navigator.geolocation.getCurrentPosition(resolve,reject);
        })
        return position;
    } catch(err) {
        console.log('Failed getting geolocation',err);
    }
}
async function getCurrentWeatherData() {
    try {
        const position = await getGeolocation();
        const { latitude,longitude } = position.coords;
        const openWeatherApi = axios.create({
            baseURL:`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${latitude},${longitude}`,
            params: {
                aggregateHours:'24',
                key:APIKEY,
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
import axios from "axios"

const APIKEY = import.meta.env.VITE_API_KEY;

function getSearchedWeatherData() {
    try{
        const visualCrossingAPI = axios.create({
            baseURL:'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast',
            params:{
                aggregateHours: '24',
                unitGroup:'metric',
                contentType:'json',
                key:APIKEY,
            }  
        })
        return visualCrossingAPI;
    } catch(error) {
        console.log(error);
    }
}

export default getSearchedWeatherData;
///tezpur?unitGroup=metric&key=YNWMKP6R55KU3E4VNFQ5M38AY&contentType=json
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

export default getGeolocation;


function function handleResponseFromAPI(promise) {
    return promise
    .then(() => ({
        status; 200,
        bosy: 'success',
    }))
    .catch(()=> Error())
    .finally(() => console.log('Got a response from the API'));
}

export default handleResponseFromAPI;
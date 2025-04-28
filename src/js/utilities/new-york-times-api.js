const baseURL = 'https://api.nytimes.com/svc/';
const apiKey = import.meta.env.VITE_NYT_API_KEY;
const cache = JSON.parse(localStorage.getItem('cache')) ?? {};

async function fetchData(url){
    url.searchParams.append('api-key', apiKey)
    
    if(cache[url.href] !== undefined){
        console.log('Returning cached data...');
        
        return cache[url.href].results;
        
    } else {
        const response = await fetch(url);
        const data = await response.json();
        
        cache[url.href] = data;
        localStorage.setItem('cache', JSON.stringify(cache))
        
        return data;
    }
}

export async function getMostPopular(endpoint, daysPeriod){
    const url = new URL(`mostpopular/v2/${endpoint}/${daysPeriod}.json`, baseURL);

    return fetchData(url);
}
export async function getTopStories(endpoint, daysPeriod){
    const url = new URL(`mostpopular/v2/${endpoint}/${daysPeriod}.json`, baseURL);

    return fetchData(url);
}
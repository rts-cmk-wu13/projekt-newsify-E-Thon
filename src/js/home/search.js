import {getNewswire} from '../utilities/new-york-times-api.js';
// FETCH OG CACHE:
const newsArticlesEurope = await getNewswire('World')
const newsArticlesHealth = await getNewswire('Health')
const newsArticlesArts = await getNewswire('Arts')
const newsArticlesBusiness = await getNewswire('Business')
const newsArticlesTravel = await getNewswire('Travel')

export default function performSearch() {
    console.log("Searchfunction is not yet created");
    

}
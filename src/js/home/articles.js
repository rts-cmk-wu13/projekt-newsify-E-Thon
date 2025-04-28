import {getSearchStories} from '../utilities/new-york-times-api.js';

// FETCH OG CACHE:
const newsArticlesEurope = await getSearchStories('World')
const newsArticlesHealth = await getSearchStories('Health')
const newsArticlesSport = await getSearchStories('sport')
const newsArticlesBusiness = await getSearchStories('business')
const newsArticlesTravel = await getSearchStories('Travel')


export function europe (){
    const ul = document.querySelector(".news__articles.europe");
    const europeArticles = newsArticlesEurope.filter(article => article.subsection === "Europe");

    ul.innerHTML = europeArticles.map(europe => {
        return `
        <li>
            <a href="${business.url}" target="_blank">
                <img src="${europe.media?.[0]?.url || 'https://placecats.com/g/100/100'}" alt="${europe.title}">
                <h3>${europe.title}</h3>
                <p>${europe.abstract}</p>
            </a>
        </li>
        `
    }).join("");
}

export function health (){
    const ul = document.querySelector(".news__articles.health");

    ul.innerHTML = newsArticlesHealth.map(health => {
        return `
        <li>
            <a href="${business.url}" target="_blank">
                <img src="${health.media?.[0]?.url || 'https://placecats.com/g/100/100'}" alt="${health.title}">
                <h3>${health.title}</h3>
                <p>${health.abstract}</p>
            </a>
        </li>
        `
    }).join("");
}
export function sport (){
    const ul = document.querySelector(".news__articles.sport");
    
    ul.innerHTML = newsArticlesSport.map(sport => {
        return `
        <li>
            <a href="${business.url}" target="_blank">
                <img src="${sport.media?.[0]?.url || 'https://placecats.com/g/100/100'}" alt="${sport.title}">
                <h3>${sport.title}</h3>
                <p>${sport.abstract}</p>
            </a>
        </li>
        `
    }).join("");
    
}
export function business (){
    const ul = document.querySelector(".news__articles.business");
    
    ul.innerHTML = newsArticlesBusiness.map(business => {
        return `
        <li>
            <a href="${business.url}" target="_blank">
                <img src="${business.media?.[0]?.url || 'https://placecats.com/g/100/100'}" alt="${business.title}">
                <h3>${business.title}</h3>
                <p>${business.abstract}</p>
            </a>
        </li>
        `
    }).join("");
    
}
export function travel (){
    const ul = document.querySelector(".news__articles.travel");
    
    ul.innerHTML = newsArticlesTravel.map(travel => {
        return `
        <li>
            <a href="${business.url}" target="_blank">
                <img src="${travel.media?.[0]?.url || 'https://placecats.com/g/100/100'}" alt="${travel.title}">
                <h3>${travel.title}</h3>
                <p>${travel.abstract}</p>
            </a>
        </li>
        `
    }).join("");
    
}
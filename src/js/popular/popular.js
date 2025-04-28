import {getMostPopular} from '../utilities/new-york-times-api.js';

// FETCH OG CACHE:
const newsArticles = await getMostPopular('viewed', 7)
console.log(newsArticles);

export function europe (){
    const ul = document.querySelector(".news__articles.europe");
    const europeArticles = newsArticles.filter(article => article.section === "Europe");

    ul.innerHTML = europeArticles.map(europe => {
        return `
        <li>
            <img src="${europe.media?.[0]?.url || 'https://placecats.com/g/100/100'}" alt="${europe.title}">
            <h3>${europe.title}</h3>
            <p>${europe.abstract}</p>
        </li>
        `
    }).join("");
}

export function health (){
    const ul = document.querySelector(".news__articles.health");
    const healthArticles = newsArticles.filter(article => article.section === "Health");

    ul.innerHTML = healthArticles.map(health => {
        return `
        <li>
            <img src="${health.media?.[0]?.url || 'https://placecats.com/g/100/100'}" alt="${health.title}">
            <h3>${health.title}</h3>
            <p>${health.abstract}</p>
        </li>
        `
    }).join("");
}
export function sport (){
    const ul = document.querySelector(".news__articles.sport");
    const sportArticles = newsArticles.filter(article => article.section === "Sport");
    
    ul.innerHTML = sportArticles.map(sport => {
        return `
        <li>
            <img src="${sport.media?.[0]?.url || 'https://placecats.com/g/100/100'}" alt="${sport.title}">
            <h3>${sport.title}</h3>
            <p>${sport.abstract}</p>
        </li>
        `
    }).join("");
    
}
export function business (){
    const ul = document.querySelector(".news__articles.business");
    const businessArticles = newsArticles.filter(article => article.section === "Business");
    
    ul.innerHTML = businessArticles.map(business => {
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
    const travelArticles = newsArticles.filter(article => article.section === "Travel");
    
    ul.innerHTML = travelArticles.map(travel => {
        return `
        <li>
            <img src="${travel.media?.[0]?.url || 'https://placecats.com/g/100/100'}" alt="${travel.title}">
            <h3>${travel.title}</h3>
            <p>${travel.abstract}</p>
        </li>
        `
    }).join("");
    
}
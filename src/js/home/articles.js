import {getNewswire} from '../utilities/new-york-times-api.js';

// FETCH OG CACHE:
const newsArticlesEurope = await getNewswire('World')
const newsArticlesHealth = await getNewswire('Health')
const newsArticlesArts = await getNewswire('Arts')
const newsArticlesBusiness = await getNewswire('Business')
const newsArticlesTravel = await getNewswire('Travel')


export function europe (){
    const ul = document.querySelector(".news__articles.europe");
    const europeArticles = newsArticlesEurope.filter(article => article.subsection === "Europe");

    ul.innerHTML = europeArticles.map(europe => {
        return `
        <li class="news__article">
            <div class="news__div" data-article="${europe.title}">
                <img src="${europe.multimedia?.[0]?.url || 'https://placecats.com/g/100/100'}" alt="${europe.title}">
                <h3>${europe.title}</h3>
                <p>${europe.abstract}</p>
                <a href="${europe.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
            </div>
        </li>
        `
    }).join("");

    return europeArticles;
}

export function health (){
    const ul = document.querySelector(".news__articles.health");

    ul.innerHTML = newsArticlesHealth.map(health => {
        return `
        <li class="news__article">
            <div class="news__div" data-article="${health.title}">
                <img src="${health.multimedia?.[0]?.url || 'https://placecats.com/g/100/100'}" alt="${health.title}">
                <h3>${health.title}</h3>
                <p>${health.abstract}</p>
                <a href="${health.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
            </div>
        </li>
        `
    }).join("");
}
export function arts (){
    const ul = document.querySelector(".news__articles.arts");
    
    ul.innerHTML = newsArticlesArts.map(arts => {
        return `
        <li class="news__article">
            <div class="news__div" data-article="${arts.title}">
                <img src="${arts.multimedia?.[0]?.url || 'https://placecats.com/g/100/100'}" alt="${arts.title}">
                <h3>${arts.title}</h3>
                <p>${arts.abstract}</p>
                <a href="${arts.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
            </div>
        </li>
        `
    }).join("");
    
}
export function business (){
    const ul = document.querySelector(".news__articles.business");
    
    ul.innerHTML = newsArticlesBusiness.map(business => {
        return `
        <li class="news__article">
            <div class="news__div" data-article="${business.title}">
                <img src="${business.multimedia?.[0]?.url || 'https://placecats.com/g/100/100'}" alt="${business.title}">
                <h3>${business.title}</h3>
                <p>${business.abstract}</p>
                <a href="${business.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
            </div>
        </li>
        `
    }).join("");
    
}
export function travel (){
    const ul = document.querySelector(".news__articles.travel");
    
    ul.innerHTML = newsArticlesTravel.map(travel => {
        return `
        <li class="news__article">
            <div class="news__div" data-article="${travel.title}">
                <img src="${travel.multimedia?.[0]?.url || 'https://placecats.com/g/100/100'}" alt="${travel.title}">
                <h3>${travel.title}</h3>
                <p>${travel.abstract}</p>
                <a href="${travel.url}" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
            </div>
        </li>
        `
    }).join("");
    
}

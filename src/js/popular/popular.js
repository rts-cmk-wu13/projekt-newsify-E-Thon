import {getTopStories} from '../utilities/new-york-times-api.js';

// FETCH OG CACHE:
const newsArticlesEurope = await getTopStories('world')
const newsArticlesHealth = await getTopStories('health')
const newsArticlesArts = await getTopStories('arts')
const newsArticlesBusiness = await getTopStories('business')
const newsArticlesTravel = await getTopStories('travel')


export function europe (){
    const ul = document.querySelector(".news__articles.europe");
    const europeArticles = newsArticlesEurope.filter(article => article.subsection === "europe");

    if (Array.isArray(europeArticles) && europeArticles.length > 0) {
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
    } else {
        ul.innerHTML = `
            <li class="news__article">
                <div class="news__div">
                    <img src='https://placecats.com/g/100/100' alt="placeholder image">
                    <h3>Unavailable</h3>
                    <p>There are no articles in this section</p>
                </div>
            </li>
        `;
    }
    
}

export function health (){
    const ul = document.querySelector(".news__articles.health");

    if (Array.isArray(newsArticlesHealth) && newsArticlesHealth.length > 0) {
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
    } else {
        ul.innerHTML = `
            <li class="news__article">
                <div class="news__div">
                    <img src='https://placecats.com/g/100/100' alt="placeholder image">
                    <h3>Unavailable</h3>
                    <p>There are no articles in this section</p>
                </div>
            </li>
        `;
    }
}

export function arts (){
    const ul = document.querySelector(".news__articles.arts");
    
    if (Array.isArray(newsArticlesArts) && newsArticlesArts.length > 0) {
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
            `;
        }).join("");
    } else {
        ul.innerHTML = `
            <li class="news__article">
                <div class="news__div">
                    <img src='https://placecats.com/g/100/100' alt="placeholder image">
                    <h3>Unavailable</h3>
                    <p>There are no articles in this section</p>
                </div>
            </li>
        `;
    }
    
}

export function business (){
    const ul = document.querySelector(".news__articles.business");

    if (Array.isArray(newsArticlesBusiness) && newsArticlesBusiness.length > 0) {
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
        
    } else {
        ul.innerHTML = `
            <li class="news__article">
                <div class="news__div">
                    <img src='https://placecats.com/g/100/100' alt="placeholder image">
                    <h3>Unavailable</h3>
                    <p>There are no articles in this section</p>
                </div>
            </li>
        `;
    }
    
}

export function travel (){
    const ul = document.querySelector(".news__articles.travel");

    if (Array.isArray(newsArticlesTravel) && newsArticlesTravel.length > 0) {
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
        
    } else {
        ul.innerHTML = `
            <li class="news__article">
                <div class="news__div">
                    <img src='https://placecats.com/g/100/100' alt="placeholder image">
                    <h3>Unavailable</h3>
                    <p>There are no articles in this section</p>
                </div>
            </li>
        `;
    }
    
}
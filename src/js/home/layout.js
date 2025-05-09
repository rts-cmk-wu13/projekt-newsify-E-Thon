import '../../style/style.scss'
import header from '../header.js'
import footer from '../footer.js'
import news from '../news.js'
import searchfield from './searchfield.js'
import { europe, health, arts, business, travel } from './articles.js'
import initDarkMode from '../darkmode.js'
import performSearch from './search.js'
import active from '../active.js'



document.querySelector('#app').innerHTML = `
    <header></header>
    <main></main>
    <footer></footer>
    `

document.querySelector("header").append(header())
document.querySelector("main").append(searchfield(), news())
document.querySelector("footer").append(footer())

initDarkMode();
active();

window.addEventListener('DOMContentLoaded', () => {
    europe();
    health();
    arts();
    business();
    travel();
    performSearch();
});

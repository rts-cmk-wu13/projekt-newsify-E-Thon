import '../../style/style.scss'
import header from '../header.js'
import footer from '../footer.js'
import news from '../news.js'
import { europe, health, arts, business, travel } from './popular.js'
import initDarkMode from '../darkmode.js'
import active from '../active.js'



document.querySelector('#app').innerHTML = `
    <header></header>
    <main></main>
    <footer></footer>
    `

document.querySelector("header").append(header())
document.querySelector("main").append(news())
document.querySelector("footer").append(footer())

initDarkMode();
active();
window.addEventListener('DOMContentLoaded', () => {
    europe();
    health();
    arts();
    business();
    travel();
});

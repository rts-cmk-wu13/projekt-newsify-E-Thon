import '../../style/style.scss'
import header from '../header.js'
import footer from '../footer.js'
import news from '../news.js'
import search from './search.js'
import { europe, health, sport, business, travel } from './articles.js'


document.querySelector('#app').innerHTML = `
    <header></header>
    <main></main>
    <footer></footer>
    `

document.querySelector("header").append(header())
document.querySelector("main").append(search(), news())
document.querySelector("footer").append(footer())

europe();
health();
sport();
business();
travel();
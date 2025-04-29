import '../../style/style.scss'
import header from '../header.js'
import footer from '../footer.js'
import { upperSection, lowerDiv } from './content.js'
import news from '../news.js'
import switchBtn from './switch.js'



document.querySelector('#app').innerHTML = `
    <header></header>
    <main></main>
    <footer></footer>
    `

document.querySelector("header").append(header())
document.querySelector("main").append(upperSection(), news(), lowerDiv())
document.querySelector("footer").append(footer())

switchBtn();

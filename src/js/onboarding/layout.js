import '../../style/style.scss'
import main from './main.js'
import initDarkMode from '../darkmode.js'
import skip from './skip.js'


document.querySelector('#app').innerHTML = `
    <header></header>
    <main></main>
    <footer></footer>
    `

document.querySelector("main").append(main())

initDarkMode();
skip();

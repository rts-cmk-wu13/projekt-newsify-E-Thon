import news from '../news.js'
import switchBtn from './switch.js'
import {upperSection, lowerDiv} from './content.js'

export default function main() {
    document.querySelector("main").append(upperSection(), news(), lowerDiv())
    switchBtn();    
}
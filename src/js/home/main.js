import newsList from '../newsList.js'
import news from '../news.js'
import search from './search.js'

export default function main() {
    document.querySelector("main").append(search(), news())
}

document.addEventListener("DOMContentLoaded", () => {
    newsList();
});
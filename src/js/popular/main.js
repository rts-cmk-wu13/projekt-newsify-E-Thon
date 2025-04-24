import newsList from '../newsList.js'
import news from '../news.js'

export default function main() {
    document.querySelector("main").append(news())
}

document.addEventListener("DOMContentLoaded", () => {
    newsList();
});
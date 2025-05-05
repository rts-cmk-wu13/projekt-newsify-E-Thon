
export default function footer() {
    let ulElm = document.createElement("ul")
    ulElm.className="ulFooter"

    ulElm.innerHTML = `
        <li><a href="home.html" class="footer__link--home"><i class="fa-solid fa-house"></i>Home</a></li>
        <li><a href="archive.html" class="footer__link--archive"><i class="fa-regular fa-bookmark"></i>Archive</a></li>
        <li><a href="popular.html" class="footer__link--popular"><i class="fa-regular fa-star"></i></i>Popular</a></li>
        <li><a href="settings.html" class="footer__link--settings"><i class="fa-solid fa-gear"></i></i>Settings</a></li>
    `
    return ulElm;
}

export function currentPage() {
    console.log('');
    
}
  

export default function footer() {
    let ulElm = document.createElement("ul")
    ulElm.className="ulFooter"

    ulElm.innerHTML = `
        <li><a href="home.html"><i class="fa-solid fa-house"></i>Home</a></li>
        <li><a href="archive.html"><i class="fa-regular fa-bookmark"></i>Archive</a></li>
        <li><a href="popular.html"><i class="fa-regular fa-star"></i></i>Popular</a></li>
        <li><a href="settings.html"><i class="fa-solid fa-gear"></i></i>Settings</a></li>
    `
    return ulElm;
}

export function currentPage() {
    console.log('');
    
}
  
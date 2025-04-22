
export default function footer() {
    let ulElm = document.createElement("ul")
    ulElm.className="ulFooter"

    ulElm.innerHTML = `
        <li><a href="#"><i class="fa-solid fa-house"></i>Home</a></li>
        <li><a href="#"><i class="fa-regular fa-bookmark"></i>Archive</a></li>
        <li><a href="#"><i class="fa-regular fa-star"></i></i>Popular</a></li>
        <li><a href="#"><i class="fa-solid fa-gear"></i></i>Settings</a></li>
    `
    return ulElm;
}
  
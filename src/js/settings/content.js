
export function upperSection () {
    let sectionElm = document.createElement("section")
    sectionElm.className="upperSection"

    sectionElm.innerHTML = `
        <h4>Settings</h4>
        <p>Categories</p>

    `

    return sectionElm
}
export function lowerDiv () {
    let divElm = document.createElement("div")
    divElm.className="lowerDiv"

    divElm.innerHTML = `
        <button class="btn3" id="lightdark">Toggle dark mode</button>
        <p>Version 4.8.15.16.23.42</p>

    `

    return divElm
}

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
        <button class="btn3">Toggle dark mode</button>
        <p>Categories</p>

    `

    return divElm
}
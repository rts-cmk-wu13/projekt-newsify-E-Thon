import logo from "/newsify_logo.png";

export default function header() {
    let headerElm = document.createElement("div");
    headerElm.className = "headerElm"

    headerElm.innerHTML = `
        <a href="./src/views/home.html">
            <img src="${logo}" alt="Newslify logo" />  
            <h1>Newslify</h1>
        </a>
    `
    return headerElm;
}
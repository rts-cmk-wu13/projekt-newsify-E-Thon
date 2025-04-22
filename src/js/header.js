import logo from "public/newsify_logo.png";

export default function header() {
    let divElm = document.createElement("div")
    divElm.className="divHeader"

    divElm.innerHTML = `
        <img src="${logo}" alt="Newslify logo" />  
        <h1>Newslify</h1>
            
    `
    return divElm;
}
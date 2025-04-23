import logo from "/newsify_logo.png";

export default function main() {
  let sectionElm = document.createElement("section");
  sectionElm.className = "mainSection";

  sectionElm.innerHTML = `
    <img src="${logo}" alt="Newslify logo" />  
    <h1>Newsify</h1>
    <p>Welcome! Let's dive into your account</p>
    <a class="btn1">Continue with Facebook</a>
    <a class="btn1">Continue with Google</a>

    <a class="btn2">Sign in with password</a>
    <p>Don't have an account? <a href="./src/views/home.html">Sign up</a></p>
    
        
    `;

  return sectionElm;
}

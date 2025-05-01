import logo from "/newsify_logo.png";

export default function main() {
  let sectionElm = document.createElement("section");
  sectionElm.className = "mainSectionLogin";

  sectionElm.innerHTML = `
    <img src="${logo}" alt="Newslify logo" />  
    <h1>Newsify</h1>
    <p class="mainSection__p">Welcome! Let's dive into your account!</p>
    <a href="./src/views/home.html" class="btn1">Continue with Facebook</a>
    <a href="./src/views/home.html" class="btn1">Continue with Google</a>
    <div>
        <span></span>
        <p>or</p>
        <span></span>
    </div>
    <a href="./src/views/home.html" class="btn2">Sign in with password</a>
    <p class="mainSection__p">Don't have an account? <a href="./src/views/home.html">Sign up</a></p>
    
        
    `;

  return sectionElm;
}

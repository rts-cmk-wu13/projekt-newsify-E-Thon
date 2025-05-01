import img1 from "/onboarding1.png";
import img2 from "/onboarding2.png";
import img3 from "/onboarding3.png";

export default function createOnboardingUI() {
  let divElm = document.createElement("div");
  divElm.className = "mainDivBoarding";

  divElm.innerHTML = `
  <article class="step1 active">
    <img src="${img1}" alt="Login onboarding screenshot" />
    <h2>Stay Connected, Everywhere, Anytime</h2>
    <p>Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.</p>
  </article>
  <article class="step2">
    <img src="${img2}" alt="Newspage onboarding screenshot" />
    <h2>Become a Savvy Global Citizen.</h2>
    <p>Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!</p>  
  </article>
  <article class="step3">
    <img src="${img3}" alt="Settings onboarding screenshot" />
    <h2>Enhance your News Journey Now!</h2>
    <p>Be part of our dynamic community and contribute your insights and participate in enriching conversations.</p>
  </article>

  <div class="dots">
    <span class="dot active" data-step="1"></span>
    <span class="dot" data-step="2"></span>
    <span class="dot" data-step="3"></span>
  </div>

  <div class="navigation">
    <button class="btn1 skip">Skip</button>
    <button class="btn2 next">Continue</button>
  </div>  
  `;

  return divElm;
}
export default function skip() {
  // Er onboarding udført før:
  if (localStorage.getItem("hasCompletedOnboarding")) {
    window.location.href = "./login.html";
    return document.createElement("div");
  }

  const skipBtn = document.querySelector(".skip");
  const nextBtn = document.querySelector(".next");
  const dots = document.querySelectorAll(".dot");
  const articles = document.querySelectorAll("article");
  let currentStep = 1;

  skipBtn.addEventListener("click", () => {
    completeOnboarding();
  });

  nextBtn.addEventListener("click", () => {
    if (currentStep < 3) {
      currentStep++;
      updatePage();
    } else {
      completeOnboarding();
    }
  });

  function updatePage() {
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });
    articles[currentStep - 1].classList.add("active");
  dots[currentStep - 1].classList.add("active");
  }

  function completeOnboarding() {
    localStorage.setItem("hasCompletedOnboarding", "true");
    window.location.href = "./login.html";
  }

  updatePage();
}

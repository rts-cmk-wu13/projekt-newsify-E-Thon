export default function skip() {
  if (localStorage.getItem("hasCompletedOnboarding")) {
    window.location.href = "./login.html";
    return document.createElement("div"); 
  }

  const onboardingElement = main();

  // Set up the navigation logic
  setTimeout(() => {
    initializeOnboardingNavigation(onboardingElement);
  }, 0);

  return onboardingElement;
}

/**
 * Sets up all navigation event listeners and functionality
 * @param {HTMLElement} rootElement - The onboarding container element
 */
function initializeOnboardingNavigation(rootElement) {
  const skipBtn = rootElement.querySelector(".skip");
  const nextBtn = rootElement.querySelector(".next");
  const dots = rootElement.querySelectorAll(".dot");
  const articles = rootElement.querySelectorAll("article");
  let currentStep = 1;

  // Skip button functionality
  skipBtn.addEventListener("click", () => {
    completeOnboarding();
  });

  // Next button functionality
  nextBtn.addEventListener("click", () => {
    if (currentStep < 3) {
      // Go to next step
      currentStep++;
      updateUI();
    } else {
      // Complete the onboarding on last step
      completeOnboarding();
    }
  });

  // Update step indicators and article visibility
  function updateUI() {
    // Hide all articles and deactivate all dots
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    dots.forEach((dot) => {
      dot.classList.remove("active");
    });

    // Show current article and activate current dot
    articles[currentStep - 1].classList.add("active");
    dots[currentStep - 1].classList.add("active");

    // Update button text on last step
    if (currentStep === 3) {
      nextBtn.textContent = "Get Started";
    } else {
      nextBtn.textContent = "Continue";
    }
  }
}

/**
 * Completes the onboarding process and redirects to main page
 */
function completeOnboarding() {
  // Mark onboarding as completed in localStorage
  localStorage.setItem("hasCompletedOnboarding", "true");

  // Redirect to main page
  window.location.href = "./login.html";
}

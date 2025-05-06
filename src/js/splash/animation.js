export default function animation() {
  const heading = document.querySelector("h1");
  const logo = document.querySelector("img");

  const onboardingURL = "/src/views/onboarding.html";

  const logoAnimationDuration = 1000;
  const headingDelay = logoAnimationDuration;
  const headingAnimationDuration = 500;
  const displayDuration = 2000;
  const totalTime =
    logoAnimationDuration +
    headingDelay +
    headingAnimationDuration +
    displayDuration;

  function animateLogo() {
    logo.style.opacity = "0";
    logo.style.transform = "scale(0)";

    logo.style.transition = `transform ${logoAnimationDuration}ms ease, opacity ${logoAnimationDuration}ms ease`;

    setTimeout(() => {
      logo.style.opacity = "1";
      logo.style.transform = "scale(1)";
    }, 50);
  }

  function animateHeading() {
    heading.style.opacity = "0";
    heading.style.transform = "translateY(20px)";
    heading.style.transition = `opacity ${headingAnimationDuration}ms ease, transform ${headingAnimationDuration}ms ease`;

    setTimeout(() => {
      heading.style.opacity = "1";
      heading.style.transform = "translateY(0)";
    }, logoAnimationDuration + headingDelay);
  }

  function redirectToNewPage() {
    setTimeout(() => {
      window.location.href = onboardingURL;
    }, totalTime);
  }

  animateLogo();
  animateHeading();
  redirectToNewPage();
}

export default function swiper() {
  const container = document.querySelector(".news__articles");

  let initialX;
  let currentX;
  let movedX;

  let icon = document.querySelector("span");
  icon.textContent = "save";
  icon.style.position = "absolute";
  icon.style.top = "20px";

  container.addEventListener("pointerdown", startTouch);
  container.addEventListener("pointermove", moveTouch);
  container.addEventListener("pointerup", endTouch);

  function startTouch(e) {
    initialX = e.clientX;
  }
  function moveTouch(e) {
    currentX = e.clientX;
    movedX = currentX - initialX;
    // tjek om den allerede er en favorit
    e.target.e.target.closest(".news__link").style.left = movedX + "px";
    
    // vise et element
    e.target.closest(".news__article").append(icon);
  }
  function endTouch(e) {
    initialX = undefined;
    if (movedX < -100) {
      // gemmelogik eller slettelogik

      e.target.closest(".news__link").style.left = "-100px";
    }
    if (movedX > -100) {
      e.target.closest(".news__link").style.left = "0px";
    }
  }
}

export default function swiper() {
    const containers = document.querySelectorAll(".news__articles");
  
    containers.forEach((container) => {
      let initialX;
      let currentX;
      let movedX;
  
      //ICON:
      let icon = document.createElement("span");
      icon.textContent = "save";
      icon.style.position = "absolute";
      icon.style.top = "2.5rem";
      icon.style.right = "2.5rem";
  
      container.addEventListener("pointerdown", startTouch);
      container.addEventListener("pointermove", moveTouch);
      container.addEventListener("pointerup", endTouch);
  
      function startTouch(e) {
        e.preventDefault();
        initialX = e.clientX;
        e.target.closest(".news__link").classList.remove("animate");
      }
  
      function moveTouch(e) {
        e.preventDefault();
        currentX = e.clientX;
        movedX = currentX - initialX;
        // tjek om den allerede er en favorit så rød farve og eller så grøn:
        e.target.closest(".news__article").style.backgroundColor =
          "var(--archive)";
        if (movedX < 0) {
          e.target.closest(".news__link").style.left = movedX + "px";
        }
  
        // vise et element
        if (movedX < -104) {
          e.target.closest(".news__article").append(icon);
        }
      }
  
      function endTouch(e) {
        e.preventDefault();
        initialX = undefined;
        if (movedX < -104) {
  
          // gemmelogik eller slettelogik
          e.target.closest(".news__article").removeChild(icon);
          e.target.closest(".news__link").classList.add("animate");
          e.target.closest(".news__link").style.left = "0";
        }
      }
    });
  }
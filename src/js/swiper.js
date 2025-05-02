export default function swiper() {
    const containers = document.querySelectorAll(".news__articles");
  
    containers.forEach((container) => {
      let initialX;
      let currentX;
      let movedX;
  
      //ICON:
      let icon = document.createElement("span");
      icon.innerHTML = `<i class="fa-regular fa-bookmark"></i>`;
      icon.style.position = "absolute";
      icon.style.top = "45%";
      icon.style.margin = "0 auto";
      icon.style.right = "20%";
      icon.style.zIndex = "0";
  
      container.addEventListener("pointerdown", startTouch);
      container.addEventListener("pointermove", moveTouch);
      container.addEventListener("pointerup", endTouch);
  
      function startTouch(e) {
        e.preventDefault();
        initialX = e.clientX;
        e.target.closest(".news__div").classList.remove("animate");
      }
  
      function moveTouch(e) {
        e.preventDefault();
        currentX = e.clientX;
        movedX = currentX - initialX;
        console.log(movedX);
        
        // tjek om den allerede er en favorit så rød farve og eller så grøn:
        e.target.closest(".news__article").style.backgroundColor =
          "var(--archive)";
        if (movedX < 0) {
          e.target.closest(".news__div").style.left = movedX + "px";
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

          e.target.closest(".news__div").classList.add("animate");
          e.target.closest(".news__div").style.left = "0";
        }
      }
    });
  }
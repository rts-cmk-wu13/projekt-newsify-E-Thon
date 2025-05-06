export default function newsList() {
    const newsArrows = document.querySelectorAll(".chevron");
    const newsArrow = document.querySelector(".single-chevron");
  
    // alle chevrons kombineres til én liste.
    // .filter(Boolean) fjerner, hvis et element = null og derfor ville have givet fejl
    const allArrows = [...newsArrows, newsArrow].filter(Boolean);
  
    allArrows.forEach((arrow) => {
      arrow.addEventListener("click", (e) => {
        const subNews = e.currentTarget
          .closest("li")
          .querySelector(".news__articles");
        const chevron = e.currentTarget;
        if (subNews.style.display === "block") {
          subNews.style.display = "none";
          chevron.classList.remove("fa-chevron-down");
          chevron.classList.add("fa-chevron-right");
        } else {
          subNews.style.display = "block";
          chevron.classList.remove("fa-chevron-right");
          chevron.classList.add("fa-chevron-down");
        }
      });
    });
  }
  
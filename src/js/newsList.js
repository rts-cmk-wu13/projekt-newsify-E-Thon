export default function newsList() {
  const newsArrows = document.querySelectorAll(".chevron");

  newsArrows.forEach((arrow) => {
    arrow.addEventListener("click", (e) => {
      let subNews = e.currentTarget
        .closest("li")
        .querySelector(".news__articles");
      let chevron = e.currentTarget;
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

import logo from "/newsify_logo.png";
import { getNewswire, getTopStories } from "../utilities/new-york-times-api.js";
import { readFromLocalStorage } from "../utilities/localstorage.js";

export default async function archived() {
  const ulElm = document.querySelector(".news");

  //! ARCHIVED ARTICLES:
  const archivedTitles = readFromLocalStorage("archived") || [];
  const allSections = await Promise.all([
    getNewswire("World"),
    getNewswire("Health"),
    getNewswire("Arts"),
    getNewswire("Business"),
    getNewswire("Travel"),
    getTopStories("world"),
    getTopStories("health"),
    getTopStories("arts"),
    getTopStories("business"),
    getTopStories("travel"),
  ]);
  // Aller artikler i én liste:
  const allArticles = allSections.flat();
  // Arkiveret artikler filtreres:
  const archivedArticles = allArticles.filter((article) =>
    archivedTitles.includes(article.title)
  );

  //! ARCHIVED PAGE CONTENT:
  ulElm.innerHTML = `
    <li>
        <div class="news__box">
            <img src="${logo}" alt="Newslify logo" />  
            <h2>Archived articles</h2>
            <div class="news__div">
                <i class="fa-solid fa-chevron-right single-chevron"></i>
            </div>
        </div>
        <ul class="news__articles"></ul>
    </li>
    `;

  const ul = document.querySelector(".news__articles");
  ul.innerHTML = archivedArticles
    .map((article) => {
      return `
      <li class="news__article">
          <div class="news__div" data-article="${article.title}">
              <img src="${
                article.multimedia?.[0]?.url ||
                "https://placecats.com/g/100/100"
              }" alt="${article.title}">
          <h3>${article.title}</h3>
          <p>${article.abstract}</p>
          <a href="${
            article.url
          }" target="_blank">Read more <i class="fa-solid fa-angles-right"></i></a>
        </div>
      </li>
    `;
    })
    .join("");
}

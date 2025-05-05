export default function active() {
    const path = window.location.pathname;
  
    if (path === "/src/views/home.html") {
        document.querySelector(".ulFooter .footer__link--home").style.color = "var(--highlight)"
    } else if (path === "/src/views/archive.html") {
        document.querySelector(".ulFooter .footer__link--archive").style.color = "var(--highlight)"
    } else if (path === "/src/views/popular.html") {
        document.querySelector(".ulFooter .footer__link--popular").style.color = "var(--highlight)"
    } else if (path === "/src/views/settings.html"){
        document.querySelector(".ulFooter .footer__link--settings").style.color = "var(--highlight)"
    }
  }
  
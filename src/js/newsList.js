export default function newsList(){
    const newsArrows = document.querySelectorAll(".news__div")

    newsArrows.forEach(arrow => {
        arrow.addEventListener("click", e => {
            let subNews = e.currentTarget.parentElement.nextElementSibling;
            let chevron = e.currentTarget.querySelector(".chevron");
            if (subNews.style.display === "block"){
                subNews.style.display = "none"
                chevron.classList.remove("fa-chevron-down")
                chevron.classList.add("fa-chevron-right")
            } else {
                subNews.style.display = "block"
                chevron.classList.remove("fa-chevron-right")
                chevron.classList.add("fa-chevron-down")
            }

        })
    })
    
}
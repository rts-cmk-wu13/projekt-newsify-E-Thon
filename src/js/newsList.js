export default function newsList(){
    const chevrons = document.querySelectorAll(".chevron")

    chevrons.forEach(chevron => {
        chevron.addEventListener("click", e => {
            let subNews = e.currentTarget.parentElement.nextElementSibling;
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
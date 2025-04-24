
export default function switchBtn() {
    document.querySelectorAll(".news__div").forEach(div => {
        div.innerHTML = `
            <form action="#" class="switch" method="post">
                <input type="checkbox" id="switch" value="false" name="switch">
                <span class="slider round"></span>
            </form>
        ` 
    })
}


let img = document.getElementById("image");
img?.addEventListener('touchstart', (event) => {
    let text = document.getElementById("text");
    if (text != null) {
        text.innerHTML = "Touched";
    }
})

if (img != null) {
    img.ontouchstart = (event) => {
        let text = document.getElementById("text");
        if (text != null) {
            text.innerHTML = "Touched 1";
        }
    }
}

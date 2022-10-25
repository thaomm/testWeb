let img = document.getElementById("image");
img?.addEventListener('touchstart', (event) => {
    let text = document.getElementById("text");
    if (text != null) {
        text.innerHTML = "Touched";
    }
})
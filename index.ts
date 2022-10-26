let img = document.getElementById("image");
if (img != null) {
    img.addEventListener('contextmenu', (event) => {
        let text = document.getElementById("text");
        if (text != null) {
            text.innerHTML = "Touched";
        }
    })
}


const colorPickers = document.querySelectorAll(".colorPicker");
const body = document.body;
const h3 = document.querySelector("h3");

function setGradient() {
    const color1 = colorPickers[0].value;
    const color2 = colorPickers[1].value;
    body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    h3.textContent = `background: ${body.style.background};`;
}

colorPickers.forEach(colorPicker => {
    colorPicker.addEventListener("input", setGradient);
});

// Initial gradient setup
setGradient();

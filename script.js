let box = document.querySelector("div");
let input = document.getElementById("colorInput");
let toggleSwitch = document.getElementById("toggleSwitch");
let dynamicBackground = false;

input.addEventListener("keyup", () => {
    let value = input.value.trim();
    
    if (value === "") {
        if (dynamicBackground) {
            document.body.classList.remove("dynamic-background");
            dynamicBackground = false;
        }
        box.style.backgroundImage = `url('your-background-image-url.jpg')`;
    } else {
        if (!dynamicBackground) {
            document.body.classList.add("dynamic-background");
            dynamicBackground = true;
        }
        if (/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value) || /^rgb\((\s*\d{1,3}\s*,){2}\s*\d{1,3}\s*\)$/.test(value)) {
            box.style.animation = "colorChange 1s forwards";
            box.style.background = value;
            document.body.style.background = value;
        } else {
            box.style.animation = "none";
            box.style.background = "transparent";
            document.body.style.background = "transparent";
            box.style.backgroundImage = `url('${value}')`;
        }
    }
});

toggleSwitch.addEventListener("click", () => {
    dynamicBackground = !dynamicBackground;
    if (dynamicBackground) {
        document.body.classList.add("dynamic-background");
        input.dispatchEvent(new Event("keyup"));
    } else {
        document.body.classList.remove("dynamic-background");
    }
});

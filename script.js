let box = document.querySelector("div");
let input = document.querySelector("input");
let toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("change", () => {
    if (toggleSwitch.checked) {
        changeBackground(input.value);
    } else {
        resetBackground();
    }
});

input.addEventListener("keyup", () => {
    if (toggleSwitch.checked) {
        changeBackground(input.value);
    }
});

function changeBackground(value) {
    if (isValidColor(value)) {
        box.style.backgroundColor = value;
        document.body.style.backgroundColor = value;
    } else {
        box.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1044570469279481907/1211673823364251688/FB_IMG_1705191223026.jpg?ex=65ef0e2f&is=65dc992f&hm=fd6b92bb4f63956dca732a371e5b5434704b2defb59f6529423de14943be1135&')";
        document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1044570469279481907/1211673823364251688/FB_IMG_1705191223026.jpg?ex=65ef0e2f&is=65dc992f&hm=fd6b92bb4f63956dca732a371e5b5434704b2defb59f6529423de14943be1135&')";
    }
}

function resetBackground() {
    box.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1044570469279481907/1211673823364251688/FB_IMG_1705191223026.jpg?ex=65ef0e2f&is=65dc992f&hm=fd6b92bb4f63956dca732a371e5b5434704b2defb59f6529423de14943be1135&')";
    document.body.style.backgroundImage = "url('https://cdn.discordapp.com/attachments/1044570469279481907/1211673823364251688/FB_IMG_1705191223026.jpg?ex=65ef0e2f&is=65dc992f&hm=fd6b92bb4f63956dca732a371e5b5434704b2defb59f6529423de14943be1135&')";
}

function isValidColor(color) {
    // Regular expression to match hex, rgb, or rgba color values
    let colorRegex = /^(#([0-9a-fA-F]{3}){1,2}|(rgb|rgba)\((\d{1,3}),(\d{1,3}),(\d{1,3})(,(\d*\.?\d+))?\))$/;
    return colorRegex.test(color);
}

const buttonsMain = [
    "Button_Main_0",
    "Button_Main_1",
    "Button_Main_2",
    "Button_Main_3",
    "Button_Main_4",
    "Button_Main_5",
    "Button_Main_6",
];

function pMain(mainPage, activeId) {
    const mainFrame = document.getElementById("main-frame");

    if (!mainFrame) {
        return;
    }

    mainFrame.src = mainPage;

    buttonsMain.forEach((id) => {
        const btn = document.getElementById(id);
        if (btn) btn.disabled = false;}
    );

    const activeBtn = document.getElementById(activeId);
    if (activeBtn) activeBtn.disabled = true;
}

window.addEventListener("DOMContentLoaded", () => {
    pMain("games.html", "Button_Main_0");
});

// freeCodeCamp.org - Color Palette Generator //
const generateBtn = document.getElementById("generate-colors")
const paletteContainer = document.querySelector(".palette-container")

generateBtn.addEventListener("click", generatePalette)

document.addEventListener("click", function (e) {
    const box = e.target.closest(".color-box")

    if (box) {
        const hexValue = box.querySelector(".hex-value").textContent

        navigator.clipboard.writeText(hexValue)
            .then(() => console.log("Copied:", hexValue))
            .catch(err => console.error("Copy failed", err))
    }
})

function generatePalette() {
    const colors = []

    for (let i = 0; i<5; i++) {
        colors.push(generateRandomColor())
    }

    updatePaletteDisplay(colors)
}

function generateRandomColor() {
    const letters = "0123456789ABCDEF"
    let color = "#"

    for (let i = 0; i<6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }

    return color
}

function updatePaletteDisplay(colors) {
    const colorBoxes = document.querySelectorAll(".color-box")

    colorBoxes.forEach((box, index) => {
        const color = colors[index]
        const colorDiv = box.querySelector(".color")
        const hexValue = box.querySelector(".hex-value")

        colorDiv.style.backgroundColor = color;
        hexValue.textContent = color;
    })
}

generatePalette();

// freeCodeCamp.org - Password Generator //

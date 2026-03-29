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
const generateColors = document.getElementById("generate-colors")
const paletteContainer = document.querySelector(".palette-container")

generateColors.addEventListener("click", generatePalette)

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
const passwordInput = document.getElementById("password");
const lengthSlider = document.getElementById("length-slider");
const lengthDisplay = document.getElementById("length-value");
const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");
const generatePassword = document.getElementById("generate-password");
const copyPassword = document.getElementById("copy-password");
const strengthBar = document.getElementById("strength-bar");
const strengthContainer = document.getElementById("strength-container")
const strengthLabel = document.getElementById("strength-label");
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numberCharacters = "0123456789";
const symbolCharacters = "!@#$%^&*()-_=+{}|;:,.<>?/"

lengthSlider.addEventListener("input", () => {
    lengthDisplay.textContent = lengthSlider.value;
});

generatePassword.addEventListener("click", makePassword)

function makePassword() {
    const length = Number(lengthSlider.value)
    const includeUppercase = uppercaseCheckbox.checked
    const includeLowercase = lowercaseCheckbox.checked
    const includeNumbers = numbersCheckbox.checked
    const includeSymbols = symbolsCheckbox.checked

    if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
        strengthBar.style.width = 0
        strengthBar.style.backgroundColor = "#000000"
        strengthLabel.textContent = "no";
        return;
    }

    const newPassword = createRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols)

    passwordInput.value = newPassword
    updateStrengthMeter(newPassword)
}

function updateStrengthMeter(password) {
    const passwordLength = password.length;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSymbols = /[!@#$%^&*()-_=+{}|;:,.<>?]/.test(password);

    let strengthScore = 0;
    
    strengthScore += Math.min(passwordLength * 2, 40);

    if (hasUppercase) strengthScore += 15
    if (hasLowercase) strengthScore += 15
    if (hasNumbers) strengthScore += 15
    if (hasSymbols) strengthScore += 15
    if (passwordLength < 8 ) {
        strengthScore = Math.min(strengthScore, 40)
    }

    const safeScore = Math.max(5, Math.min(100, strengthScore))

    let strengthLabelText = ""
    let barColor = ""

    if (strengthScore < 40) {
        barColor = "#fc8181"
        strengthLabelText = "Pathetic"
    } else if (strengthScore < 70) {
        barColor = "#fbd38d"
        strengthLabelText = "Mediocre"
    } else {
        barColor = "#68d391"
        strengthLabelText = "Muscles"
    }

    strengthBar.style.width = safeScore + "%"
    strengthBar.style.backgroundColor = barColor;
    strengthLabel.textContent = strengthLabelText;
}

function createRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    let allCharacters = "";
    let password = "";

    if (includeUppercase) allCharacters += uppercaseLetters;
    if (includeLowercase) allCharacters += lowercaseLetters;
    if (includeNumbers) allCharacters += numberCharacters;
    if (includeSymbols) allCharacters += symbolCharacters;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allCharacters.length)
        password += allCharacters[randomIndex]
    }

    return password;
}

window.addEventListener("DOMContentLoaded", makePassword);
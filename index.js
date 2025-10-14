const qualsSection = document.getElementById("qualifications");

const pinkText = document.querySelector(".quals_pink");
const blueText = document.querySelector(".quals_blue");
const greenText = document.querySelector(".quals_green");

const pinkBtn = document.querySelector(".quals_btn_pink");
const blueBtn = document.querySelector(".quals_btn_blue");
const greenBtn = document.querySelector(".quals_btn_green");

function pinkButton() {
    if (pinkText.classList.contains("active") !== true) {
            pinkText.classList.add("active");
            blueText.classList.remove("active");
            greenText.classList.remove("active");

            // qualsSection.classList.add("pink_active");
            // qualsSection.classList.remove("blue_active");
            // qualsSection.classList.remove("green_active");

            pinkBtn.classList.add("btn_active");
            blueBtn.classList.remove("btn_active");
            greenBtn.classList.remove("btn_active");
    }
}

function blueButton() {
    if (blueText.classList.contains("active") !== true) {
            blueText.classList.add("active");
            pinkText.classList.remove("active");
            greenText.classList.remove("active");

            // qualsSection.classList.add("blue_active");
            // qualsSection.classList.remove("pink_active");
            // qualsSection.classList.remove("green_active");

            blueBtn.classList.add("btn_active");
            pinkBtn.classList.remove("btn_active");
            greenBtn.classList.remove("btn_active");
    }
}

function greenButton() {
    if (greenText.classList.contains("active") !== true) {
            greenText.classList.add("active");
            pinkText.classList.remove("active");
            blueText.classList.remove("active");

            // qualsSection.classList.add("green_active");
            // qualsSection.classList.remove("pink_active");
            // qualsSection.classList.remove("blue_active");

            greenBtn.classList.add("btn_active");
            pinkBtn.classList.remove("btn_active");
            blueBtn.classList.remove("btn_active");
    }
}
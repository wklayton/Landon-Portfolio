// Disable CSS Transitions on Page Load
setTimeout(() => {
  const toggleLabel = document.querySelector('.no_transition');
  toggleLabel.classList.remove('no_transition');
}, 500);


// Qualifications Button CSS Class Toggle
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

            greenBtn.classList.add("btn_active");
            pinkBtn.classList.remove("btn_active");
            blueBtn.classList.remove("btn_active");
    }
}
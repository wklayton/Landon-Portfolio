const qualsSection = document.getElementById("qualifications")

const pinkBtn = document.querySelector(".quals_pink")
const blueBtn = document.querySelector(".quals_blue")
const greenBtn = document.querySelector(".quals_green")

function pinkButton() {
    console.log(pinkBtn);
    if (pinkBtn.classList.contains("active") === true) {
        console.log(`Hello World`)
    } else {
        console.log(`Goodbye`)
        pinkBtn.classList.add("active")
        blueBtn.classList.remove("active")
        greenBtn.classList.remove("active")

        qualsSection.classList.add("pink_active")
        qualsSection.classList.remove("blue_active")
        qualsSection.classList.remove("green_active")
    }

}

function blueButton() {
    console.log(blueBtn);
    if (blueBtn.classList.contains("active") === true) {
        console.log(`Hello World`)
    } else {
        console.log(`Goodbye`)
        blueBtn.classList.add("active")
        pinkBtn.classList.remove("active")
        greenBtn.classList.remove("active")

        qualsSection.classList.add("blue_active")
        qualsSection.classList.remove("pink_active")
        qualsSection.classList.remove("green_active")
    }
}

function greenButton() {
    console.log(greenBtn);
    if (greenBtn.classList.contains("active") === true) {
        console.log(`Hello World`)
    } else {
        console.log(`Goodbye`)
        greenBtn.classList.add("active")
        pinkBtn.classList.remove("active")
        blueBtn.classList.remove("active")

        qualsSection.classList.add("green_active")
        qualsSection.classList.remove("pink_active")
        qualsSection.classList.remove("blue_active")
    }
}
let mainComplete = document.querySelector(".complete")
let thankContainer = document.querySelector(".thank-you")

let submitButton = document.getElementById("sub")
let rateAgain = document.getElementById("rate-again")
let rating = document.getElementById("rating")
let button = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    thankContainer.classList.remove("hidden")
    mainComplete.style.display ="none"
})

rateAgain.addEventListener("click", () => {
    thankContainer.classList.add("hidden")
    mainComplete.style.display ="block"
})

button.forEach((rate) => {
    rate.addEventListener("click",()=>{
     rating.innerHTML = rate.innerHTML
    })
})


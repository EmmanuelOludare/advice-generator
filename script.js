const idNumber = document.getElementById("number");
const button = document.getElementById("dice");
const advice = document.getElementById("quote");

button.addEventListener("click",getAdvice);

let url = "https://api.adviceslip.com/advice"

function getAdvice() {

button.style.transform = "rotate(360deg)"
fetch (url)
.then(function (res) {
		return res.json();
})
.then(function (data) {
				let advices = data;
				idNumber.textContent = advices.slip.id;
				advice.textContent =advices.slip.advice;
})

};
window.onload = getAdvice();


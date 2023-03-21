const name = document.querySelector("#name");
const mail = document.querySelector("#mail");
const number = document.querySelector("#number");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector('.popup');
const close = document.querySelector('.close');
const navbar = document.querySelector('.navbar');

// function changeStyle() {
// 	document.getElementsByClassName(".heading").style.opacity = "0.5";
//   }

document.querySelector("#menu-btn").onclick = () => {
	navbar.classList.toggle("active");
	searchForm.classList.remove("active");
	cartItem.classList.remove("active");
};

const searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
	searchForm.classList.toggle("active");
	navbar.classList.remove("active");
	cartItem.classList.remove("active");
};

const cartItem = document.querySelector(".cart-items-container");

document.querySelector("#cart-btn").onclick = () => {
	cartItem.classList.toggle("active");
	navbar.classList.remove("active");
	searchForm.classList.remove("active");
};

window.onscroll = () => {
	navbar.classList.remove("active");
	searchForm.classList.remove("active");
	cartItem.classList.remove("active");
};

const footerYear = document.querySelector(".footer__year");

const handleCurrentYear = () => {
	const year = new Date().getFullYear();
	footerYear.innerText = year;
};

handleCurrentYear();




const showError = (input, msg) => {
	const inputBox = input.parentElement;
	const errorMsg = inputBox.querySelector(".error-text");

	inputBox.classList.add("error");
	errorMsg.textContent = msg;
};

const clearError = input => {
	const inputBox = input.parentElement;
	inputBox.classList.remove("error");
};

const checkForm = input => {
	input.forEach(el => {
		if (el.value === "") {
			showError(el, el.placeholder);
		} else {
			clearError(el);
		}
	});
};

const checkLength = (input, min) => {
	if (input.value.length < min) {
		showError(
			input,
			`${name.previousElementSibling.innerText.slice(
				0,
				-1
			)} the field must contain at least ${min} characters.`
		);
	}
};

const checkNumber = (number, min) => {
	
	if (number.value.length === min) {
		clearError(number);
	} else {
		showError(number, "the number must consist of 9 digits!");
	}
};

const checkMail = (mail) => {
	const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

	if (re.test(mail.value)) {
		clearError(mail);
	} else {
		showError(mail, "email is invalid!");
	}
};

const checkErrors = () => {
	const allInputs = document.querySelectorAll(".inputBox");
	let errorCount = 0;

	allInputs.forEach(el => {
		if (el.classList.contains("error")) {
			errorCount++;
		}
	});

	if (errorCount === 0) {
		popup.classList.add("show-popup");
	}
};



sendBtn.addEventListener("click", e => {
	e.preventDefault();

	checkForm([name, mail, number]);
	checkLength(name, 3);
	checkNumber(number, 9);
	checkMail(mail);
	checkErrors();
	// changeStyle()
	
});

clearBtn.addEventListener("click", e => {
	e.preventDefault();
	[name, mail, number].forEach(el => {
		el.value = "";
		clearError(el);
	});
});

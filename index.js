let counterEl = document.querySelector("#counter-el");
let prevEntries = document.querySelector("#previous-entries");
const incrementBtn = document.querySelector("#increment-btn");
const saveBtn = document.querySelector("#save-btn");
let count = 0;

incrementBtn.addEventListener("click", increment);

function increment() {
	count++;
	counterEl.textContent = count;
}

saveBtn.addEventListener("click", save);

function save() {
	let counterStr = `${count} - `;
	prevEntries.textContent += counterStr;
	counterEl.textContent = 0;
	count = 0;
}

const INPUT_EL = document.getElementById("input-el");
const SAVE_BTN = document.getElementById("input-btn");
const TAB_BTN = document.getElementById("tab-btn");
const DELETE_BTN = document.getElementById("delete-btn");
const LIST_EL = document.getElementById("list-el");
let myLeads = [];

const LEADS_FROM_LOCAL_STORAGE = JSON.parse(localStorage.getItem("myLeads"));

if (LEADS_FROM_LOCAL_STORAGE) {
	myLeads = LEADS_FROM_LOCAL_STORAGE;
	render(myLeads);
}

function render(leads) {
	let listItems = "";
	for (let i = 0; i < leads.length; i++) {
		listItems += `
			<li>
				<a href="${leads[i]}" target="_blank">${leads[i]}</a>
			</li>
		`;
	}

	LIST_EL.innerHTML = listItems;
}

SAVE_BTN.addEventListener("click", () => {
	myLeads.push(INPUT_EL.value);
	INPUT_EL.value = "";
	localStorage.setItem("myLeads", JSON.stringify(myLeads));
	render(myLeads);
});

TAB_BTN.addEventListener("click", () => {
	chrome.tabs.query(
		{
			active: true,
			currentWindow: true,
		},
		function (tabs) {
			myLeads.push(tabs[0].url);
			localStorage.setItem("myLeads", JSON.stringify(myLeads));
			render(myLeads);
		}
	);
});

DELETE_BTN.addEventListener("click", () => {
	localStorage.clear();
	myLeads = [];
	render(myLeads);
});

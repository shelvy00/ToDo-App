let inputElement = document.querySelector("input");
let formElement = document.querySelector("form");
let listElement = document.querySelector("ul");

let taskList = [
    "Get Food",
    "Clean kitchen"
];

// save data to local storage
function saveTaskList() {
	let str = JSON.stringify(taskList);
	localStorage.setItem("taskList",str);
};

// get data from local storage
function getTaskList() {
	let strTask = localStorage.getItem("taskList");
	taskList = JSON.parse(str);
	if (!taskList) {
		taskList = [];
	}
}
//getTaskList();


function deleteItem(e) {
	let task = e.target.parentElement.previousElementSibling.innerHTML;
	let index = taskList.indexOf(task);
	if (index !== -1) {
		taskList.splice(index, 1);
	}

	makeList();
};

function makeList() {
	listElement.innerHTML = "",
	taskList.forEach(function(item){
		let newItem = document.createElement("li");

		//Add new span for text
		let span = document.createElement("span");
		span.innerHTML = item;
		newItem.appendChild(span);

		//Add delete button
		let btn = document.createElement("button");
		btn.classList.add("delete");
		btn.innerHTML = "-"
		newItem.appendChild(btn);

		btn.addEventListener("click", (e)=> deleteItem(e));


		//add Li to Ul
		listElement.appendChild(newItem);
	});

	inputElement.value = "";
};

makeList();

function addTask() {
 if (inputElement.value) {
 	taskList.push(inputElement.value)
 	makeList()
 	saveTaskList()
 }
};

formElement.addEventListener("submit", function(e) {
	e.preventDefault();
	addTask()
});
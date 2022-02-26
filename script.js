const inputElement = document.querySelector("input");
const formElement = document.querySelector("form");
const listElement = document.querySelector("ul");

let taskList = [
    "Get Food",
    "Clean Kitchen"
 ];

// save data to local storage
function saveTaskList() {
	const str = JSON.stringify(taskList);
	localStorage.setItem("taskList",str);
};

// get data from local storage
function getTaskList() {
	const strTask = localStorage.getItem("taskList");
	taskList = JSON.parse(strTask);
	console.log(JSON.parse(strTask));
	makeList();
}
getTaskList();

// delete data from local storage
function deleteItem(id) {
	const strTask = localStorage.getItem("taskList");
	taskList = JSON.parse(strTask);
	//const task = document.getElementById(id)
	//let task = e.target.parentElement.previousElementSibling.innerHTML;
	//let index = taskList.indexOf(task,1);
	//if (task !== -1) {
	taskList.splice(id,1);
	localStorage.setItem("taskList", JSON.stringify(taskList));
    //}

	makeList();
};

function makeList() {
	listElement.innerHTML = "",
	taskList.forEach(function(item, index){
		const newItem = document.createElement("li");

		//Add new span for text
		const span = document.createElement("span");
		span.innerHTML = item;
		newItem.appendChild(span);

		//Add delete button
		const btn = document.createElement("button");
		btn.classList.add("delete");
		btn.innerHTML = "Delete"
		btn.setAttribute("id" , index)
		btn.onclick = function() {deleteItem(index)}
		newItem.appendChild(btn);

		//btn.addEventListener("click", (e)=> deleteItem(e));	


		//add Li to Ul
		listElement.appendChild(newItem);
	});

	inputElement.value = "";
};

function addTask() {
 if (inputElement.value) {
 	taskList.push(inputElement.value)
 	makeList()
 	saveTaskList()
 	getTaskList()
 }
};

formElement.addEventListener("submit", function(e) {
	e.preventDefault();
	addTask()
	getTaskList()
});
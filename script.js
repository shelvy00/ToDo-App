let inputElement = document.querySelector("input");
let formElement = document.querySelector("form");
let listElement = document.querySelector("ul");

let taskList = []

if (localStorage.getItem("taskList") === null) {

	axios.get('https://jsonplaceholder.typicode.com/todos')
	.then(function (response) {
		const responseData = response.data;
		for (let i = 0; i < 5; i++) {
			taskList.push(responseData[i].title)
			
			console.log(responseData[i].title)
		}
		localStorage.setItem("taskList", JSON.stringify(taskList))

	})
	
}

// save data to local storage
function saveTaskList() {
	let str = JSON.stringify(taskList);
	localStorage.setItem("taskList",str);
};

// get data from local storage
function getTaskList() {
	let strTask = localStorage.getItem("taskList");
	taskList = JSON.parse(strTask);
	console.log(JSON.parse(strTask));
	makeList();
}
getTaskList();

// delete data from local storage
function deleteItem(id) {
	let strTask = localStorage.getItem("taskList");
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
		let newItem = document.createElement("li");

		//Add new span for text
		let span = document.createElement("span");
		span.innerHTML = item;
		newItem.appendChild(span);

		//Add delete button
		let btn = document.createElement("button");
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
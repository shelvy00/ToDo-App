let inputField = document.getElementById("inputField");
let toDoContainer = document.getElementById("toDoContainer")

function addTo() {
 let todo = document.createElement("p");
 let btn = document.createElement("BUTTON");
 let text = document.createTextNode("Delete");
 todo.innerText = inputField.value;
 toDoContainer.appendChild(todo);
 inputField.value = "";
 btn.appendChild(text);
 todo.appendChild(btn)

 btn.addEventListener("onclick", function() {
 	remove();
 })
} 


 /*li.appendChild(input_text);
 document.querySelector("ul").appendChild(li);
 document.todo-form.text.value = "";

 createCloseButton(li);
}

function createCloseButton(li) {
	let span = document.createElement("SPAN")
	let btn = document.createElement("Button");
	let text = document.createTextNode("delete");

	btn.className = "close";
	btn.appendChild(text);
	li.appendChild(btn);

	btn.onClick = ()=> {
	.removeChild()
 }	 
}

document.querySelectorAll("li").forEach(createCloseButton);

document.querySelector("ul").addEventListener("click", (e) => {
	if (e.target.tagName === "LI")
		e.target.className.toggle("checked")
})*/


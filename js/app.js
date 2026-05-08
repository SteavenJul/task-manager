let input = document.getElementById("task-input");
let btn = document.getElementById("add-btn");
let taskList = document.getElementById("task-list");

btn.addEventListener("click", function () {
  let text = input.value;
  let newItem = document.createElement("li");
  if (text === "") {
    alert("Please enter a task");
  } else {
    newItem.innerHTML = text + '<button class="delete-btn"> Del </button>';
    taskList.appendChild(newItem);
    newItem.querySelector('.delete-btn').addEventListener('click', function() {
        this.parentElement.remove()
    })
    newItem.addEventListener("click", function(){
        this.classList.toggle('completed')
    })
    input.value = "";
  }
});


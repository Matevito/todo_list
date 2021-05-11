class To_do {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.checklist = false;
    } 
}

function todo_element(todo) {
    let todo_element = document.createElement("tr")
    todo_element.classList.add("todo_el")

    //todo: add event for checklist --- like a box
    let checklist = document.createElement("button");
    todo_element.appendChild(checklist);
    checklist.addEventListener("click", () => {
        //code goes here
    })
    
    let title = document.createElement("td");
    title.textContent = todo.title;
    todo_element.appendChild(title);

    //check: date format
    let dueDate = document.createElement("td");
    dueDate.textContent = todo.dueDate;
    todo_element.appendChild(dueDate);

    let priority = document.createElement("td");
    priority.textContent = todo.priority;
    todo_element.appendChild(priority)

    //todo: edit event logic
    let edit = document.createElement("button");
    edit.textContent = "Edit";
    edit.addEventListener("click", () => {
        //logic goes here
    })
    todo_element.appendChild(edit)
    //edit btn //td
    return todo_element
}

let todos = [
    new To_do("wash dishes", "wash the dishes", "15/25/19","medium"),
    new To_do("push ups", "2*25 push ups", "25/12/21","low"),
    new To_do("write", "write 500 words of the novel", "25/4/19", "high"),
    new To_do("code", "30 minutes of leetcode", "25/08/29", "high")
]
const board_container = document.getElementById("container")
for (element of todos){
    board_container.appendChild(todo_element(element))
}

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

//test logic
function create_todos(list) {
    let new_board = document.createElement("div");
    new_board.setAttribute("id", "board_display")
    //
    
    for (let element of list){
        new_board.appendChild(todo_element(element));
    }

    return new_board
}

export {create_todos, To_do}
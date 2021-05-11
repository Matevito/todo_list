import {dom} from "../modules"

class To_do {
    constructor(title, description, dueDate, priority){
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.checklist = checklist;
        this.priority = priority;
        this.checklist = false;
    }
    
}

function todo_element(todo) {
    todo_element = dom.create_div()
    todo_element.classList.add("todo_el")


    return todo_element
}

export {To_do}
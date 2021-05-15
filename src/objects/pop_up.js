import {dom} from "../modules"
import {modify_data} from "./modify_data"
import {data, Proyect} from "./proyects"
import {Note, note_library} from "./note"
import { To_do } from "./todo";

const pop_up = (() => {
    const get_input_text = (name, id, value = "") => {
        let input_cell = document.createElement("div");
        input_cell.textContent = name;
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", id);
        input.value = value
        input_cell.appendChild(input)
        return input_cell
    }

    const display_popUp = (display) => {
        let console = document.getElementById("console");
        console.appendChild(display)
    }
    const remove_popUP = () => {
        let console = document.getElementById("console");
        let popUp_display = document.getElementById("pop_up");
        console.removeChild(popUp_display)

    }
    const reset_popUp = () => {
        remove_popUP()
        let console = document.getElementById("console");
        let pop_up_cell = dom.create_div("pop_up");
        console.appendChild(pop_up_cell);
    }
    const newP_pop = () => {
        remove_popUP()
        let pop_up_cell = dom.create_div("pop_up");
        //interface

        let title = get_input_text("Title", "proyect_title");
        
        let save_btn = document.createElement("button");
        save_btn.textContent = "Save";
        save_btn.addEventListener("click", () => {
            // create proyet_logic
            let title_value = document.getElementById("proyect_title").value
            let new_proyect = new Proyect(title_value);
            modify_data.add_proyect(new_proyect);
        })

        pop_up_cell.appendChild(title);
        pop_up_cell.appendChild(save_btn);
        return pop_up_cell;
    }

    const newN_pop = () => {
        remove_popUP();
        let pop_up_cell = dom.create_div("pop_up");
        let title = get_input_text("Title", "note_title");
        let note = get_input_text("Note", "note_text");
        let save_btn = document.createElement("button");
        save_btn.textContent = "Save";
        save_btn.addEventListener("click", () => {
            let title = document.getElementById("note_title").value;
            let note = document.getElementById("note_text").value;
            let new_note = new Note(title,note);
            modify_data.add_note(new_note);
        })
        pop_up_cell.appendChild(title);
        pop_up_cell.appendChild(note);
        pop_up_cell.appendChild(save_btn);
        return pop_up_cell;
    }

    const newTodo_pop = () => {
        remove_popUP();
        let pop_up_cell = dom.create_div("pop_up");

        let title = get_input_text("Title", "todo_title");
        let description = get_input_text("Description", "description_title");
        let dueDate = get_input_text("Date", "dueDate");
        let priority = get_input_text("priority", "priority");
        let save_btn = document.createElement("button");
        save_btn.textContent = "Save";
        save_btn.addEventListener("click", () => {
            let title_v = document.getElementById("todo_title").value;
            let description_v = document.getElementById("description_title").value
            let dueDate_v = document.getElementById("dueDate").value
            let priority_v = document.getElementById("priority").value
            let new_todo = new To_do(title_v, description_v, dueDate_v, priority_v)
            modify_data.add_todo(new_todo)
        })
        pop_up_cell.appendChild(title);
        pop_up_cell.appendChild(description);
        pop_up_cell.appendChild(dueDate);
        pop_up_cell.appendChild(priority);
        pop_up_cell.appendChild(save_btn);
        return pop_up_cell
    }

    const editP_pop = (index) => {
        remove_popUP();
        let pop_up_cell = dom.create_div("pop_up");
        //interface
        let title_value = data.proyects[index].title

        let title = get_input_text("Title", "proyect_title", title_value);
        let edit_btn = document.createElement("button");
        edit_btn.textContent = "save changes";

        edit_btn.addEventListener("click", () => {
            // create proyet_logic
            let new_title = document.getElementById("proyect_title").value
            data.proyects[index].title = new_title;
            dom.show_proyects()
        })

        let remove_btn = document.createElement("button");
        remove_btn.textContent = "remove"
        remove_btn.addEventListener("click", () => {
            data.proyects.splice(index, 1)
            dom.show_proyects()
        })

        pop_up_cell.appendChild(title);
        pop_up_cell.appendChild(edit_btn);
        pop_up_cell.appendChild(remove_btn);
        return pop_up_cell;
    }

    const editN_pop = (index) => {
        remove_popUP();
        let pop_up_cell = dom.create_div("pop_up");

        let note_obj = note_library.dataBase[index];

        let note_title = note_obj.title;
        let note_message = note_obj.message;
        

        let title = get_input_text("Title", "note_title", note_title);
        let note = get_input_text("Note", "note_text", note_message);

        let edit_btn = document.createElement("button");
        edit_btn.textContent ="save changes";
        edit_btn.addEventListener("click", () => {
            let new_title = document.getElementById("note_title").value;
            let new_message = document.getElementById("note_text").value;
            note_library.dataBase[index].title = new_title;
            note_library.dataBase[index].message = new_message;
            dom.show_notes();
        })

        let remove_btn = document.createElement("button");
        remove_btn.textContent = "remove"
        remove_btn.addEventListener("click", () => {
            note_library.dataBase.splice(index, 1);
            dom.show_notes();
        })

        pop_up_cell.appendChild(title);
        pop_up_cell.appendChild(note);
        pop_up_cell.appendChild(edit_btn);
        pop_up_cell.appendChild(remove_btn);

        return pop_up_cell
    }
    const editT_pop = (proyect_index, todo_index) => {
        remove_popUP()
        let pop_up_cell = dom.create_div("pop_up");
        let todo_obj = data.proyects[proyect_index].todos[todo_index];
        
        let title = get_input_text("Title", "todo_title", todo_obj.title);
        let description = get_input_text("Description", "description_title", todo_obj.description);
        let dueDate = get_input_text("Date", "dueDate", todo_obj.dueDate);
        let priority = get_input_text("priority", "priority", todo_obj.priority);

        let edit_btn = document.createElement("button");
        edit_btn.textContent = "save changes";
        edit_btn.addEventListener("click", () => {
            let new_title = document.getElementById("todo_title").value;
            let new_description = document.getElementById("description_title").value;
            let new_dueDate = document.getElementById("dueDate").value;
            let new_priority  =document.getElementById("priority").value;
            
            todo_obj.title = new_title;
            todo_obj.description = new_description;
            todo_obj.dueDate = new_dueDate;
            todo_obj.priority = new_priority;
            //  show x proyect
            let new_todos = data.proyects[proyect_index]
            dom.show_todos(new_todos)
        })

        let remove_btn = document.createElement("button");
        remove_btn.textContent = "remove";
        remove_btn.addEventListener("click", () => {
            //do this fucker thing
        })

        pop_up_cell.appendChild(title);
        pop_up_cell.appendChild(description);
        pop_up_cell.appendChild(dueDate);
        pop_up_cell.appendChild(priority);
        pop_up_cell.appendChild(edit_btn);
        pop_up_cell.appendChild(remove_btn);

        return pop_up_cell
    }

    return {
        newP_pop,
        newN_pop,
        newTodo_pop,
        display_popUp,
        display_popUp,
        reset_popUp,
        editP_pop,
        editN_pop,
        editT_pop,
    }

})();

export {pop_up}
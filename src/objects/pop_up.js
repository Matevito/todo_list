import {dom} from "../modules"
import {modify_data} from "./modify_data"
import {Proyect, data} from "./proyects"
import {Note} from "./note"

const pop_up = (() => {
    const get_input_text = (name, id) => {
        let input_cell = document.createElement("div");
        input_cell.textContent = name;
        let input = document.createElement("input");
        input.setAttribute("type", "text");
        input.setAttribute("id", id);
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
            //todo:code goes here
            let folder_title = document.querySelector("h3").textContent
            let index = 0
            // todo: proyect folder function to modify it
            for (let proyect of data.proyects){
                if(proyect.title === folder_title ){
                    console.log(proyect)
                }
            }
            //1. identify current proyect and edit it 
        })
        pop_up_cell.appendChild(title);
        pop_up_cell.appendChild(description);
        pop_up_cell.appendChild(dueDate);
        pop_up_cell.appendChild(priority);
        pop_up_cell.appendChild(save_btn);
        return pop_up_cell
    }


    return {
        newP_pop,
        newN_pop,
        newTodo_pop,
        display_popUp,
        display_popUp,
        reset_popUp,
    }

})();

export {pop_up}
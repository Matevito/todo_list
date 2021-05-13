import {dom} from "../modules"
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
            //todo:code goes here
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
            //todo:code goes here
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
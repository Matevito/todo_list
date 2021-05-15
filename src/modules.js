import {pop_up} from "./objects/pop_up"
import {notes_display} from "./objects/note"
import {create_proyects} from "./objects/proyects"
import {create_todos} from "./objects/todo"

const dom = (() => {
    const create_div = (id="") => {
        let div = document.createElement("div");
        if (id != ""){
            div.setAttribute('id', id);
        }
        return div
    }

    const create_listE = (text, class_) => {
        let list_e = document.createElement("ul");
        list_e.textContent = text
        list_e.classList.add(class_)
        return list_e
    }

    const print_board_content = (dom) => {
        //solve bugg -- correct this
        let container = document.getElementById("console");
        container.removeChild(document.getElementById("board_display"))

        let board = document.getElementById("console");
        dom.setAttribute("id", "board_display");
        board.appendChild(dom)
    }

    const reset_board = () => {
        let board_display = document.getElementById("board_display")
        document.getElementById("console").removeChild(board_display)
        let new_board = document.createElement("div");
        new_board.setAttribute("id", "board_display")
        let console_container = document.getElementById("console");
        console_container.appendChild(new_board)
    }

    const get_currentDate = () => {
        var today = new Date();
        
        
        return today
    }

    const show_proyects = () => {
        dom.reset_board();
        pop_up.reset_popUp()
        let new_info = create_proyects();
        dom.print_board_content(new_info)
    }

    const show_notes = () => {
        pop_up.reset_popUp()
        let new_info = notes_display();
        dom.print_board_content(new_info)
    }

    const show_todos = (proyect) => {
        pop_up.reset_popUp()

        let title = document.createElement("h3");
        title.textContent = proyect.title
        let board_info = create_todos(proyect.todos);

        let display = document.createElement("div");
        display.appendChild(title);
        display.appendChild(board_info);

        dom.print_board_content(display)        
    }

    return {
        create_div,
        create_listE,
        print_board_content,
        reset_board,
        get_currentDate,
        show_proyects,
        show_notes,
        show_todos
    }
})();

const container  = document.getElementById("container")

export {dom, container}
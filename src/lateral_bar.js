import {dom} from "./modules"
import {notes_display} from "./objects/note"
import {create_proyects} from "./objects/proyects"
import {today_display} from "./objects/today"

function create_lateralBar(){
    // create container
    let bar_container = dom.create_div("lateral_bar")

    // add home
    let proyects_btn = dom.create_listE("Proyects","lateral_btn");
    proyects_btn.addEventListener("click", () => {
        dom.reset_board()
        let new_info = create_proyects();
        dom.print_board_content(new_info)
    })

    // add today
    let today_btn = dom.create_listE("Today","lateral_btn");
    today_btn.addEventListener("click", () => {
        today_display()
    })
    // add notes
    let notes_btn = dom.create_listE("Notes", "lateral_btn");
    notes_btn.addEventListener("click", () => {
        // clean current board
        let new_info = notes_display();
        dom.print_board_content(new_info)
        // apend new_info into "console"
    })
    // new todo, proyect or note /TODO: NEW PROYECT AND NEW EVENT LOGIC

    //2. append the elements in the container

    bar_container.appendChild(proyects_btn)
    bar_container.appendChild(today_btn)
    bar_container.appendChild(notes_btn)

    return bar_container
}

export {create_lateralBar}
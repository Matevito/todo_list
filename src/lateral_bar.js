import {dom} from "./modules"
import {today_display} from "./objects/today"

function create_lateralBar(){
    // create container
    let bar_container = dom.create_div("lateral_bar")

    // add home
    let proyects_btn = dom.create_listE("Proyects","lateral_btn");
    proyects_btn.addEventListener("click", () => {
        dom.show_proyects();
    })

    // add today
    let today_btn = dom.create_listE("Today","lateral_btn");
    today_btn.addEventListener("click", () => {
        //  complete this event
        today_display()
    })
    // add notes
    let notes_btn = dom.create_listE("Notes", "lateral_btn");
    notes_btn.addEventListener("click", () => {
        // clean current board
        dom.show_notes()
        // apend new_info into "console"
    })
    // new todo, proyect or note /  NEW PROYECT AND NEW EVENT LOGIC

    //2. append the elements in the container

    bar_container.appendChild(proyects_btn)
    bar_container.appendChild(notes_btn)
    bar_container.appendChild(today_btn)

    return bar_container
}

export {create_lateralBar}
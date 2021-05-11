import {dom} from "./modules"

function create_lateralBar(){
    // create container
    let bar_container = dom.create_div("lateral_bar")

    // add home
    let home_btn = dom.create_listE("HOME","lateral_btn");

    // add today
    let today_btn = dom.create_listE("today","lateral_btn");

    //todo: proyects //display here the proyects?
    let proyects_btn = dom.create_listE("proyects", "lateral_btn");

    // add notes
    let notes_btn = dom.create_listE("notes", "lateral_btn");

    // new todo, proyect or note
    let new_btn = dom.create_listE("+", "new_btn")

    //2. append the elements in the container

    bar_container.appendChild(home_btn)
    bar_container.appendChild(today_btn)
    bar_container.appendChild(proyects_btn)
    bar_container.appendChild(notes_btn)
    bar_container.appendChild(new_btn)
    return bar_container
}

export {create_lateralBar}
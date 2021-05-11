import {dom} from "./modules"

function create_lateralBar(){
    // create container
    let header_container = dom.create_div()

    // add home
    let home_btn = dom.create_btn("HOME","header_btn");

    // add today
    let today_btn = dom.create_btn("today","header_btn");

    //todo: proyects //display here the proyects?
    let proyects_btn = dom.create_btn("proyects", "header_btn");

    // add notes
    let notes_btn = dom.create_btn("notes", "header_btn");

    // new todo, proyect or note
    let new_btn = dom.create_btn("+", "new_btn")

    //2. append the elements in the container

    header_container.appendChild(home_btn)
    header_container.appendChild(today_btn)
    header_container.appendChild(proyects_btn)
    header_container.appendChild(notes_btn)
    header_container.appendChild(new_btn)
    return header_container
}

export {create_lateralBar}
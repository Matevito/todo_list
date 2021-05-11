import {dom, container} from "./modules";
import {create_lateralBar} from "./lateral_bar"
import {create_todos} from "./objects/todo"

function load_board(){
    // board container
    let board_container = dom.create_div("console");

    //lateral bar
    let lateral_bar = create_lateralBar();

    //board_info displayed
    let board_info = dom.create_div("board_display")

    //todo: only for development reasons
    
    //append elements into the the container
    board_container.appendChild(lateral_bar);

    board_container.appendChild(board_info);

    container.appendChild(board_container);

    //test code
    let info = create_todos();
    container.appendChild(info)
}

//create board that shows the todos


export {load_board}
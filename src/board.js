import {dom, container} from "./modules";
import {create_lateralBar} from "./lateral_bar"

function load_board(){
    // board container
    let board_container = dom.create_div();

    //lateral bar
    let lateral_bar = create_lateralBar();

    //board_nfo displayed
    let board_info = dom.create_div()

    //append elements into the the container
    board_container.appendChild(lateral_bar);

    board_container.appendChild(board_info);

    container.appendChild(board_container);
}

//create board that shows the todos


export {load_board}
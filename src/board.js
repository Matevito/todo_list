import {dom, container} from "./modules";
import {load_lateralBar} from "./lateral_bar"

function load_board(){
    // board container
    let board_container = dom.create_div();

    //lateral bar
    let lateral_bar = load_lateralBar();

    //board_nfo displayed

    //append elements into the the container
    board_container.appendChild(lateral_bar);

    container.appendChild(board_container);
}

//create board info div

export {load_board}
import {load_header} from "./header"
import {load_board} from "./board"

function load_page(){
    //1.header
    load_header()

    //2.app
    load_board()
}

export {load_page}
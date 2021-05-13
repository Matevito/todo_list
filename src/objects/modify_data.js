import {data} from "./proyects"
import {} from "./note"
import {dom} from "../modules"

const modify_data = (() => {
    const add_proyect = (proyect) => {
        data.add_proyect(proyect);
        //display proyect
        dom.show_proyects();
    }
    const add_note = (note) => {

    }
    const add_todo = (todo) => {
        //check this
    }
})();

export {
    modify_data
}
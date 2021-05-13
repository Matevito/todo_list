import {dom} from "../modules"
import {data} from "./proyects"

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
    return{
        add_proyect,
    }
})();

export {
    modify_data
}
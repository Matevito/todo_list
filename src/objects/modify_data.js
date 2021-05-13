import {dom} from "../modules"
import {data} from "./proyects"
import {note_library} from "./note"


const modify_data = (() => {
    const add_proyect = (proyect) => {
        data.add_proyect(proyect);
        //display proyect
        dom.show_proyects();
    }
    const add_note = (note) => {
        note_library.add_note(note);
        dom.show_notes();
    }
    const add_todo = (todo) => {
        //check this
    }
    return{
        add_proyect,
        add_note,
    }
})();

export {
    modify_data
}
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
        let index = get_proyect_index()
        let c_proyect = data.proyects[index]
        c_proyect.add_todo(todo);

        //todo: show current folder
        dom.show_proyects()
    }
    const get_proyect_index = () => {
        let folder_title = document.querySelector("h3").textContent
            // todo: proyect folder function to modify it
            for (let proyect of data.proyects){
                if(proyect.title === folder_title ){
                    return data.proyects.indexOf(proyect)
                }
            }
    }
    return{
        add_proyect,
        add_note,
        add_todo
    }
})();

export {
    modify_data
}
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
        let folder_title = document.querySelector("h3").textContent
        let index = get_proyect_index(folder_title)
        let c_proyect = data.proyects[index]
        c_proyect.add_todo(todo);

        //todo: code goes here
        dom.show_todos(c_proyect.todos)
    }

    const get_proyect_index = (folder_title) => {
        for (let proyect of data.proyects){
            if(proyect.title === folder_title ){
                return data.proyects.indexOf(proyect)
            }
        }
    }

    const get_note_index = (note_title) => {
        for (let note of note_library.dataBase){
            if(note_title === note.title){
                return note_library.dataBase.indexOf(note)
            }
        }
    }

    const get_todo_index = (proyect_index, todo_title) => {
        let proyect_data = data.proyects[proyect_index].todos;
        for (let todo of proyect_data){
            if(todo.title === todo_title){
                return proyect_data.indexOf(todo)
            }
        }
    }
    return{
        get_proyect_index,
        get_note_index,
        get_todo_index,
        add_proyect,
        add_note,
        add_todo,
    }
})();

export {
    modify_data
}
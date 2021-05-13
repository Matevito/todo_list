import {pop_up} from "./pop_up"

class Note {
    constructor(title,message){
        this.title = title;
        this.message = message;
    }
}

const note_library = (() => {
    let dataBase = [];

    const add_note  = (note) => {
        dataBase.push(note)
    }

    const getData = () => {
        return dataBase
    }
    return {
        add_note,
        getData
    }
})();

note_library.add_note(new Note("ex.1", "let's do this the right way"))
note_library.add_note(new Note("caso 2", "una nota en español!"))
note_library.add_note(new Note("dritten", "eine dritten note. Aber dises auf deutsch"))

function clean_board(){
    let board_display = document.getElementById("board_display")
    document.getElementById("console").removeChild(board_display)
}

function reset_board(){
    clean_board();
    let new_board = document.createElement("div");
    new_board.setAttribute("id", "board_display")
    let console_container = document.getElementById("console");

    console_container.appendChild(new_board)
}


function notes_display(){
    // one code to return the element to put on dom and another one to put it in
    let display = document.createElement("div");

    let notes = note_library.getData()

    for (let note of notes){
        let note_cell = document.createElement("div");
        let title = document.createElement("h4");
        title.textContent = note.title
        let text = document.createElement("div"); 
        text.textContent = note.message;


        let edit_note = document.createElement("button");
        edit_note.textContent = "edit"
        edit_note.addEventListener("click", () => {
            //code goes here
        })

        note_cell.appendChild(title)
        note_cell.appendChild(text);
        note_cell.appendChild(edit_note);

        display.appendChild(note_cell);
    }

    let new_note = document.createElement("button");
    new_note.textContent = "Add note!";
    new_note.addEventListener("click", () => {
        let input = pop_up.newN_pop()
        pop_up.display_popUp(input);
    })
    display.appendChild(new_note)
    //correct this

    reset_board()
    return display
}


export {
    notes_display,
    note_library,
    Note
}

class Note {
    constructor(title,message){
        this.title = title;
        this.message = message;
    }
}

const note_library = (() => {
    let dataBase = [];

    const add_note  =  (note) => {
        dataBase.push(note)
    }
    return {
        add_note
    }
})();

//todo: this 2 into a module
function clean_board(){
    let board_display = document.getElementById("board_display")
    console.log(board_display)
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

    let notes = note_library.dataBase
    for (let note of notes){
        let note_cell = document.createElement("div");
        let text = document.createElement("div");
        text.textContent = note;

        let remove_note = document.createElement("button");
        remove_note.addEventListener("click", () => {
            //code goes here:: code to remove an element from an array and then refresh
        })

        let edit_note = document.createElement("button");
        edit_note.addEventListener("click", () => {
            //code goes here
        })

        note_cell.appendChild(text);
        note_cell.appendChild(remove_note);
        note_cell.appendChild(edit_note);

        display.appendChild(note_cell);
    }
    return display
}

export {
    notes_display
}
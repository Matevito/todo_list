import {create_todos, To_do} from "./todo"

class Proyect {
    constructor(title){
        this.title = title
        this.todos = []
    };
    add_todo(event){
        this.todos.push(event);
    }
}

class DataBase {
    constructor(){
        this.proyects = []
    }
    add_proyect(proyect){
        this.proyects.push(proyect)
    }
}

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

function create_todos_display(proyect){
    let title = document.createElement("h3");
    title.textContent = proyect.title
    let board_info = create_todos(proyect.todos);
    let display = document.createElement("div");
    display.appendChild(title);
    display.appendChild(board_info);

    return display
}

let examples = [
    new To_do("wash dishes", "wash the dishes", "15/25/19","medium"),
    new To_do("push ups", "2*25 push ups", "25/12/21","low"),
    new To_do("write", "write 500 words of the novel", "25/4/19", "high"),
    new To_do("code", "30 minutes of leetcode", "25/08/29", "high")
]

let examples2 = [
    new To_do("laundry", "do the laundry", "25/25/19", "low"),
    new To_do("read", "read lotr", "1/02/22", "medium"),
    new To_do("piano", "practice 30 min", "1/01/22", "high"),
]

let start_p = new Proyect("example 1");
start_p.todos = examples;
let new_p = new Proyect("new");
new_p.todos = examples2;
let data = new DataBase();
data.add_proyect(start_p);
data.add_proyect(new_p);

///
function create_proyects(){
    let proyects_list = data.proyects

    let proyects_display = document.getElementById("board_display")

    for(let proyect of proyects_list){
        let title = document.createElement("h4");
        title.textContent = proyect.title;
        title.addEventListener("click", () => {
            // erase // conect this element with the proyect index
            //display these todos
            reset_board()

            let new_display = create_todos_display(proyect);
            document.getElementById("board_display").appendChild(new_display);

        })
        //folder with an event
        proyects_display.appendChild(title)
    }
    return proyects_display
}

export {create_proyects, data}
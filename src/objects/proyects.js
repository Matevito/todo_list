import { create_todos, To_do } from "./todo";
import { pop_up } from "./pop_up";
import { modify_data } from "./modify_data";

class Proyect {
  constructor(title) {
    this.title = title;
    this.todos = [];
  }
  add_todo(event) {
    this.todos.push(event);
  }
}

class DataBase {
  constructor() {
    this.proyects = [];
  }
  add_proyect(proyect) {
    this.proyects.push(proyect);
  }
}

function clean_board() {
  let board_display = document.getElementById("board_display");
  document.getElementById("console").removeChild(board_display);
}

function reset_board() {
  clean_board();
  let new_board = document.createElement("div");
  new_board.setAttribute("id", "board_display");
  let console_container = document.getElementById("console");
  console_container.appendChild(new_board);
}

function create_todos_display(proyect) {
  let title = document.createElement("h3");
  title.textContent = proyect.title;
  let board_info = create_todos(proyect.todos);
  let display = document.createElement("div");
  display.appendChild(title);
  display.appendChild(board_info);

  return display;
}

let examples = [
  new To_do("wash dishes", "wash the dishes", "25/03/19", "medium"),
  new To_do("push ups", "2*25 push ups", "12/05/2021", "low"),
  new To_do("write", "write 500 words of the novel", "5/12/2021", "high"),
  new To_do("code", "30 minutes of leetcode", "25/08/29", "high"),
];

let examples2 = [
  new To_do("laundry", "do the laundry", "25/5/19", "low"),
  new To_do("read", "read lotr", "1/02/22", "medium"),
  new To_do("piano", "practice 30 min", "12/05/2021", "high"),
];

let start_p = new Proyect("example 1");
start_p.todos = examples;
let new_p = new Proyect("new");
new_p.todos = examples2;
let data = new DataBase();
data.add_proyect(start_p);
data.add_proyect(new_p);

///
function create_proyects() {
  let proyects_list = data.proyects;

  let proyects_display = document.getElementById("board_display");

  for (let proyect of proyects_list) {
    let title = document.createElement("h4");
    title.textContent = proyect.title;
    title.addEventListener("click", () => {
      pop_up.reset_popUp();
      // erase // conect this element with the proyect index
      //display these todos

      //  this code to reset proyect
      reset_board();

      let new_display = create_todos_display(proyect);
      document.getElementById("board_display").appendChild(new_display);
    });
    // edit proyect name and erase proyect logic
    let edit = document.createElement("button");
    edit.textContent = "edit";
    edit.addEventListener("click", () => {
      let name = title.textContent;
      let folder_index = modify_data.get_proyect_index(name);
      let input = pop_up.editP_pop(folder_index);
      //  this has a porpouse?
      pop_up.display_popUp(input);
    });

    let proyect_cell = document.createElement("div");

    //folder with an event
    proyect_cell.appendChild(title);
    proyect_cell.appendChild(edit);
    proyects_display.appendChild(proyect_cell);
  }

  let newProyect_btn = document.createElement("button");
  newProyect_btn.textContent = "New Proyect!";
  newProyect_btn.addEventListener("click", () => {
    //code
    // create a proyect and append it to the database
    let input = pop_up.newP_pop();
    pop_up.display_popUp(input);
    //refresh the board
  });
  proyects_display.appendChild(newProyect_btn);

  return proyects_display;
}

export { create_proyects, data, Proyect };

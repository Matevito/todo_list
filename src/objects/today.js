import {data} from "./proyects"
import {format, compareAsc} from 'date-fns'
import { isEqual } from 'date-fns'
import {dom} from "../modules"



function today_display(){
    let database = data.proyects

    let current_date = dom.get_currentDate()
    let proyects_of_today = document.createElement("div")
    for (let proyect of database){
        let todos_of_today = []
        for (let todo of proyect.todos){
            //check if the event happens taday
            let date_n = todo.dueDate.split("/")
            let event_date = new Date(date_n[2], date_n[1], date_n[0]);
            if (isEqual(current_date, event_date)){
            }
        }
        if (todos_of_today != []){
            //make dom 
        }
    }
}

export {
    today_display
}
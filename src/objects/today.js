import {data} from "./proyects"
import {format, compareAsc} from 'date-fns'
import { isEqual } from 'date-fns'
import {dom} from "../modules"



function today_display(){
    let database = data.proyects

    let current_date = dom.get_currentDate()
    console.log(current_date)
    let proyects_of_today = document.createElement("div")
    for (let proyect of database){
        let todos_of_today = []
        for (let todo of proyect.todos){
            //check if the event happens taday
            let date_n = todo.dueDate.split("/")
            console.log(date_n)
            let event_date = new Date(date_n[2], date_n[1], date_n[0]);
            console.log(event_date)
            console.log(isEqual(current_date, event_date))
            if (isEqual(current_date, event_date)){
                console.log(todo);
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
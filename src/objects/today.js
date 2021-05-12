import {data} from "./proyects"
import {dom} from "../modules"



function today_display(){
    let database = data.proyects

    proyects_of_tady = document.createElement("div")
    for (let proyect of database){
        todos_of_today = []
        for (let todo of proyect.todos){
            //check if the event happens taday
        }
        if (todos_of_today != []){
            //make dom 
        }
    }
}

export {
    today_display
}
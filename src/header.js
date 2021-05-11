import {dom, container} from "./modules"

function load_header(){
    // create container
    let header_container = dom.create_div();

    //todo: do something with the header(class, images, etc)
    header_container.textContent = "Todo app!"

    container.appendChild(header_container);
}

export{load_header}
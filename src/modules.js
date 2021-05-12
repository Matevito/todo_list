
const dom = (() => {
    const create_div = (id="") => {
        //todo: add and id? with a default value of none?
        let div = document.createElement("div");
        if (id != ""){
            div.setAttribute('id', id);
        }
        return div
    }

    const create_listE = (text, class_) => {
        let list_e = document.createElement("ul");
        list_e.textContent = text
        list_e.classList.add(class_)
        return list_e
    }

    const print_board_content = (dom) => {
        //solve bugg -- correct this
        let container = document.getElementById("console");
        container.removeChild(document.getElementById("board_display"))

        let board = document.getElementById("console");
        dom.setAttribute("id", "board_display");
        board.appendChild(dom)
    }

    const reset_board = () => {
        let board_display = document.getElementById("board_display")
        document.getElementById("console").removeChild(board_display)
        let new_board = document.createElement("div");
        new_board.setAttribute("id", "board_display")
        let console_container = document.getElementById("console");
        console_container.appendChild(new_board)
    }

    const get_currentDate = () => {
        var today = new Date();
        
        
        return today
    }

    return {
        create_div,
        create_listE,
        print_board_content,
        reset_board,
        get_currentDate
    }
})();

const container  = document.getElementById("container")

export {dom, container}
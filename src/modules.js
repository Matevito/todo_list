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

    return {
        create_div,
        create_listE,
    }
})();

const container  = document.getElementById("container")

export {dom, container}
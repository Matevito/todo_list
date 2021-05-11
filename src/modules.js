const dom = (() => {
    const create_div = () => {
        //todo: add and id? with a default value of none?
        let div = document.createElement("div");
        return div
    }

    const create_btn = (text, class_) => {
        let btn = document.createElement("button");
        btn.textContent = text
        btn.classList.add(class_)
        return btn
    }

    return {
        create_div,
        create_btn,
    }
})();

const container  = document.getElementById("container")

export {dom, container}
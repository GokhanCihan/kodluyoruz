function createTask() {
    const task = document.getElementById("task").value;
  
    if(task) {
        document.getElementById("list").appendChild(ListItem(task));
        $(document).ready(function(){
            $('.success').toast('show');
        });
    }else {
        $(document).ready(function(){
            $('.error').toast('show');
        });
    }
}

function ListItem(task) {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(task));
    listItem.setAttribute("onclick", "toggleCheck(this)")
    listItem.appendChild(Button());

    return listItem;
}

function Button() {
    const button = document.createElement("button");
    button.classList.add("button-remove");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", "removeParent(this)");
    button.innerHTML = `&times;`;

    return button;
}

function toggleCheck(element) {
    if(element.getAttribute("class")){
        element.removeAttribute("class")
    }else{
        element.setAttribute("class", "checked")
    }
}

function removeParent(element) {
    element.parentNode.remove()
}


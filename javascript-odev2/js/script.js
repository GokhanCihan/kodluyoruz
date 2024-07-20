let tasks;
const defaultTasks = [ 
    { 
        "task": "Yemek yap",
        "completed": false,
    }, 
    { 
        "task": "50 sayfa kitap oku",
        "completed": false,
    },
    { 
        "task": "3 litre su iç",
        "completed": false,
    },
];
loadTasks();

function loadTasks() {
    if(!localStorage.getItem('tasks')) {
        localStorage.setItem('tasks', JSON.stringify(defaultTasks));
    }
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(element => {
        let item = ListItem(element.task);
        if (element.completed) {
            toggleCheck(item);
        }
        document.getElementById("list").appendChild(item);
    })
}

function addTask() {
    const value = document.getElementById("task").value;
  
    if(value && !(value === " ")) {
        document.getElementById("list").appendChild(ListItem(value));

        // update localStorage
        tasks.push({ "task": value, "completed": false});
        localStorage.setItem('tasks', JSON.stringify(tasks));

        $(document).ready(function(){
            $('.success').toast('show');
        });
    }else {
        $(document).ready(function(){
            $('.error').toast('show');
        });
    }
}

// create node for <li> element
function ListItem(task) {
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(task));
    listItem.setAttribute("onclick", "toggleCheck(this)")
    listItem.appendChild(Button());

    return listItem;
}

// create node for <button> element
function Button() {
    const button = document.createElement("button");
    button.classList.add("button-remove");
    button.setAttribute("type", "button");
    button.setAttribute("onclick", "removeTask(this)");
    button.innerHTML = "X";

    return button;
}

function toggleCheck(element) {
    // remove button text
    let toggledTask = element.innerText.replace("X", "");
    
    //find and modify toggled task in the array before saving
    if(element.getAttribute("class")){
        element.removeAttribute("class");
        tasks.forEach(arrayItem => {
            if(arrayItem.task === toggledTask){
                arrayItem.completed = false;
            };
        })
    }else {
        element.setAttribute("class", "checked");
        tasks.forEach(arrayItem => {
            if(arrayItem.task === toggledTask){
                arrayItem.completed = true;
            };
        })
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTask(element) {
    let removedTask = element.parentNode.innerText.replace("X", "");
    let index;
    tasks.forEach(arrayItem => {
        if(arrayItem.task === removedTask){
            index = tasks.indexOf(arrayItem);
        };
    })
    tasks.splice(index, 1);
    element.parentNode.remove()
}


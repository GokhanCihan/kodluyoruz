const list = document.getElementById("list")
function newElement(){
    /* 
    1. Create a node for li element
    2. Get text inside of the input field(id=task) with value property
    3. (if true)Create a node and assign the text value to this node
    4. Append text node to list node
    5. Append list node to the list 
    */
    const listItem = document.createElement("li");
    const buttonRemove = document.createElement("button")
    const task = document.getElementById("task").value;
  
    if(task){
        /* add properties for li element */
        const textNode = document.createTextNode(task);
        listItem.appendChild(textNode);
        listItem.setAttribute("onclick", "getListItem(this)")
        
        /* add properties for button */
        buttonRemove.classList.add("button-remove")
        buttonRemove.setAttribute("type", "button")
        buttonRemove.setAttribute("onclick", "removeParent(this)")
        buttonRemove.innerHTML = `&times;`
        
        /* append button to the li element */ 
        listItem.appendChild(buttonRemove)
        
        /* append full li node to the parent ul element */
        list.appendChild(listItem);
      
        /* raise toast */
        $(document).ready(function(){
            $('.success').toast('show');
          });
    }else{
        $(document).ready(function(){
            $('.error').toast('show');
        });
    }
}

function getListItem(element){
    if(element.getAttribute("class")){
        element.removeAttribute("class")
    }else{
        element.setAttribute("class","checked")
    }
}

function removeParent(element){
    element.parentNode.remove()
}


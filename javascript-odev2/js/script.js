


var ulList = document.getElementById("list")
function newElement(){
    /* 
    1. Create a node for li element
    2. Get text inside of the input field(id=task) with value property
    3. (if true)Create a node and assign the text value to this node
    4. Append text node to list node
    5. Append list node to the list 
    */
    var newListNode = document.createElement("LI");
    var newButtonNode = document.createElement("BUTTON")
    var valueNode = document.getElementById("task").value;
  
    if(valueNode){

        /* add properties for li element */
        var textNode = document.createTextNode(valueNode);
        newListNode.appendChild(textNode);
        newListNode.setAttribute("onclick","clickedList(this)")
        
        /* add properties for button */
        newButtonNode.classList.add("button-remove")
        newButtonNode.setAttribute("type","button")
        newButtonNode.setAttribute("onclick","removesParentLi(this)")
        newButtonNode.innerHTML = `&times;`
        
        /* append button to the li element */ 
        newListNode.appendChild(newButtonNode)
        
        /* append full li node to the parent ul element */
        ulList.appendChild(newListNode);
      
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

function clickedList(element){
    if(element.getAttribute("class")){
        element.removeAttribute("class")
    }else{
        element.setAttribute("class","checked")
    }
}

function removesParentLi(element){
    element.parentNode.remove()
}


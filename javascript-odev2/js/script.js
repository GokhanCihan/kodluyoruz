
/* 
1. Create a node for li element
2. Get text inside of the input field(id=task) with value property
3. (if true)Create a node and assign the text value to this node
4. Append text node to list node
5. Append list node to the list  
*/

function newElement(){
    var newListNode = document.createElement("LI");
    var valueNode = document.getElementById("task").value;
    if(valueNode){
        var textNode = document.createTextNode(valueNode);
        newListNode.appendChild(textNode);
        document.getElementById("list").appendChild(newListNode);
        $(document).ready(function(){
            $('.success').toast('show');
          });
    }else{
        $(document).ready(function(){
            $('.error').toast('show');
        });
    }
}




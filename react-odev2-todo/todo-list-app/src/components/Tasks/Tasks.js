import React from 'react';

function Tasks({tasks, addTask}) {

    const changeClassOnClick = (e) => {
        let parentLi = e.target.parentElement.parentElement;
        if(e.target.checked){
            parentLi.setAttribute("class", "completed")
        }else{
            parentLi.setAttribute("class", "not-completed")
        }
    }

    const markAllComplete = (e) => {
        if(e.target.checked){
            e.target.previousSibling.checked = false
            e.target.checked = false 
            let ulElNode = e.target.nextSibling
            let liElements = ulElNode.childNodes   
            for (let i = 0; i < liElements.length; i++) {
                liElements[i].setAttribute("class", "not-completed")       
            }      
        }else {
            e.target.previousSibling.checked = true
            e.target.checked = true
            let ulElNode = e.target.nextSibling
            let liElements = ulElNode.childNodes   
            for (let i = 0; i < liElements.length; i++) {
                liElements[i].setAttribute("class", "completed")       
            }     
        }
    }
    
    const removeTask = (objId) => {
        addTask(tasks.filter(item => item.id !==objId))
    }
    
    return (
        <section hidden={(tasks.length === 0) ? true : false} className="main">
		  	<input 
              className="toggle-all" 
              type="checkbox" 
              />
		  	<label 
              htmlFor="toggle-all" 
              type="checkbox"
              defaultChecked={false}
              onClick={markAllComplete}
              >
		      Mark all as complete
		  	</label>
		  	<ul className="todo-list">
                {tasks.map( element => {                
                    return(
                    <li key={element.id}>
                        <div className='view'>
                            <input 
                            id= {element.id}
                            className='toggle' 
                            type='checkbox' 
                            defaultChecked= {false}  
                            onChange={changeClassOnClick}
                            />
                            <label>{element.task}</label>
                            <button className="destroy" onClick={() => removeTask(element.id)}></button>
                        </div>
                    </li>
                    )
                    }
                )}
		  	</ul>
	    </section>
    )
}

export default Tasks;
import React from "react";

function NewTask() {
	


    return (
        <header className="header">
		    <h1>todos</h1>
		    <form>
			    <input 
				className = "new-todo" 
				placeholder = "What needs to be done?" 
				/>
		    </form>
	    </header>
    )    
}

export default NewTask;
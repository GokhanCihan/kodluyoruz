import React from "react";

function Form() {
    return (
        <header className="header">
		    <h1>todos</h1>
		    <form>
			    <input className="new-todo" placeholder="What needs to be done?" autofocus/>
		    </form>
	    </header>
    )    
}

export default Form;
import React from "react";
import { useState } from "react";

function NewTask({activeTasks, addNewTask}) {
	const [inputText, setInputText] = useState("")
	const updateTextArea = (e) => setInputText(e.target.value)
	const submitInput = (e) => {
		if(e.key === 'Enter' || e.key === 'NumpadEnter'){
			addNewTask([...activeTasks, inputText]);
			onSubmit(e);
		}
	}
	const onSubmit = (e) => {
		e.preventDefault();
		setInputText("")
	}
    return (
        <header className="header">
		    <h1>todos</h1>
		    <form>
			    <input 
				className = "new-todo" 
				placeholder = "What needs to be done?"
				value = {inputText}
				onChange ={updateTextArea}
				onKeyDown ={submitInput}
				/>
		    </form>
	    </header>
    )    
}

export default NewTask;
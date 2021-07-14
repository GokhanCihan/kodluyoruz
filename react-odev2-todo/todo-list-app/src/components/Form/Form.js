import React from "react";
import { useState } from "react";

var i=1;
function Form({addTask, tasks}) {
	
	const[form, setForm] = useState('');

	const onChangeInput = ((e) => {setForm(e.target.value)})

	const pressEnter = (e) => {
		if(e.key === 'Enter' || e.key === 'NumpadEnter'){
			console.log('pressed Enter');
			e.preventDefault();
			onSubmit();
			setForm('');
		}		
	}
	const onSubmit = () => {
		i++
		addTask([...tasks, { id: i, task: form, isComplete: false, doDestroy: false}])
	}


    return (
        <header className="header">
		    <h1>todos</h1>
		    <form onSubmit={onSubmit}>
			    <input 
				className = "new-todo" 
				placeholder = "What needs to be done?" 
				value = {form}
				onChange = {onChangeInput} 
				onKeyDown = {pressEnter} 
				/>
		    </form>
	    </header>
    )    
}

export default Form;
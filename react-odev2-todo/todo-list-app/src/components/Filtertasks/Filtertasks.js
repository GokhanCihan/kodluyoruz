import React from 'react';


function Filtertasks({tasks, addTask}) {
    return (	
        <footer hidden={(tasks.length === 0) ? true : false} className="footer">

            {/* This should be `0 items left` by default*/}
            <span className="todo-count">
                <strong>{tasks.length+' '}</strong>
                  items left
            </span>

            <ul className ="filters">
                <li>
                    <a href='this' className="selected">All</a>
                </li>
                <li>
                    <a href='this'>Active</a>
                </li>
                <li>
                    <a href='this'>Completed</a>
                </li>
            </ul>

            {/* Hidden if no completed items are left ↓ */}
            <button className="clear-completed">
                Clear completed
            </button>
        </footer>
    )
}

export default Filtertasks;
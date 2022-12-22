import React, { useState } from 'react';
import './new_goals.css';
import $ from 'jquery'

const New_Goals = props => {
    
    var [count, setCount] = useState(0);

    const addHandler = e => {
        e.preventDefault();
        const newGoal = {
            id: count.toString(),
            text: $("#new").val()
        };
        setCount(count+=1);
        props.onAdd(newGoal);
    }

    return(
        <form onSubmit={addHandler}>
            <input id='new' name='new' placeholder='Goal'/>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default New_Goals
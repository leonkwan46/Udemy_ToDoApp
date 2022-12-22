import React, { useState } from 'react';
import './new_goals.css';

const New_Goals = props => {

    let [count, setCount] = useState(0);
    let [newText, setNewTest] = useState("");

    const addHandler = e => {
        e.preventDefault();
        
        if (!newText) {
            alert("Input Invalid")
        } else {
            const newGoal = {
                id: count.toString(),
                text: newText
            };
            setCount(count+=1);
            setNewTest("");
            props.onAdd(newGoal);
        }
    }

    const textHandler = e => {
        setNewTest(e.target.value);
    }

    return(
        <form onSubmit={addHandler}>
            <input onChange={textHandler} value={newText} placeholder='Goal' type='text'/>
            <br/>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default New_Goals
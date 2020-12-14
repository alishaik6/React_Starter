import React from 'react';

const NewGoals = props => {

 const onSubmitHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(), text: 'my new goal'
        };

       props.onAddGoal(newGoal);
 };

    return (
        <form onSubmit= {onSubmitHandler} >
            <input type="text"/>
            <button type ="submit">Add goal</button>
        </form>

    );

}


export default NewGoals;
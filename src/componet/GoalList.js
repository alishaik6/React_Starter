import React from 'react';

const test1 = ()=> {
   return (
        <ul>
            <li>Finsh the course</li>
            <li>Learn all about the course main topics</li>
            <li>Help other students in the course</li>
        </ul>

   );
};

const GoalList = props=> {

    console.log(props.goals);
    return (
         <ul>
             {
                props.goals.map( goal => {
                    return ( <li key= {goal.id}>  {goal.text} </li>)
                 })
             }
         </ul>
 
    );
 };

export default GoalList;
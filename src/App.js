import logo from './logo.svg';
import './App.css';
import GoalList from './componet/GoalList';
import NewGoals from './componet/newGoal/NewGoal';

import React, {useState} from 'react';


const App = ()=> {

  const [courseGoals, setcourseGoals]= useState([
    {id: 'cg1', text: 'Finsh the course'},
    {id:'cg2', text: 'Learn all about the course main topics'},
    {id:'cg3', text: 'Help other students in the course'}
]);


  const addNewGoalHandler = newGoal => {
       
   // setcourseGoals(courseGoals.concat(newGoal));
      setcourseGoals( (preGoals)=> {
        return preGoals.concat(newGoal)
      });
       console.log(courseGoals);
  };

  return (
      <div>
        <h2>Course Goals</h2>
        <NewGoals onAddGoal={addNewGoalHandler}/>
        <GoalList goals={courseGoals}/>
      </div>
  );

};

export default App;

import React,{ChangeEvent, FC} from 'react';
import './App.css';
import { useState } from 'react';
import { text } from 'stream/consumers';
import { todoType } from './apptypes';
import TodoItem from './TodoItem';




const App: FC=()=> {
  const [task, setTask] = useState<string>('')
  const [workDay, setWorkDay] = useState<number>(0)
  const [todoList, setTodoList] = useState<todoType[]>([])

const handleChange =(event:ChangeEvent<HTMLInputElement>)=>{
if (event.target.name==='task') {
  setTask(event.target.value)
}else{
  setWorkDay(Number(event.target.value))
}
};
const addNewTask =()=>{
  const newTask ={taskName:task,workDay:workDay}
  setTodoList([...todoList,newTask])
  setTask('');
  setWorkDay(0);
}
const deleteTask=(nameToDelete:string) : void=>{
setTodoList(
  todoList.filter((task)=>{
    return task.taskName !== nameToDelete 
  })
)
}

  return (
    <div className="App">
      <div className='mainCard'>
        <input className='maincardinput' 
        type="text"
         value={task} 
         name='task'
         placeholder='Enter your task..'
          onChange={handleChange} 
          />
        <input className='maincardinput'
         type="number"
          value={workDay}
          name='workDay'
           placeholder='How many days you have to complete it' 
           onChange={handleChange} 
           />
        <button className='mainCardButton' onClick={addNewTask}>Add new task</button>
      </div>
      <div className='todocard'>
        {todoList.map((task:todoType,index:number)=>{
          return <TodoItem key={index} task={task} deleteTask={deleteTask}/>
        })}
      </div>
    </div>
  );
}

export default App;

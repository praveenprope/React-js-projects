import React from 'react'
import './App.css'
import ToDoListItems from './ToDoListItems'

const App = () => {

    let [addTodos, setaddTodos] = React.useState([]);
    let [deleteTodos, setdeleteTodos] = React.useState([]);
    let [editTodos, seteditTodos] = React.useState([]);

    const editHandler = (index) => {
        addTodos[index] 
    }


     const deleteHandler = (index) => {
        setdeleteTodos([...deleteTodos, index]);
        addTodos.splice(index);
        setaddTodos([...addTodos]);
     }

     


    let saveTodoList = (e) => {

      let toDoName = e.target.toDoName.value;
        if(toDoName !== '' ){
          setaddTodos([...addTodos,toDoName]);
          e.target.toDoName.value = '';
          alert('ToDo Added Successfully');
        } else if (addTodos.includes(toDoName)){
          alert('ToDo already exists');
        } else {
          alert('Please enter a ToDo');
        }
      e.preventDefault();
    }
  
     let list = addTodos.map((item, index) => {
          return(
            <ToDoListItems key={index} value={item} deleteHandler={deleteHandler} />
          )
     })



  return (
  <div className="App"> 
       <div>
       <h1>ToDoList</h1>
      <form action="" onSubmit={saveTodoList} >
        <input type="text" name='toDoName' /> 
        <button>Add</button>
      </form>
       </div>
       <div className="todoList"> 
           <ul>
            {list}
           </ul>
       </div>
     
  </div>
  )
}

export default App


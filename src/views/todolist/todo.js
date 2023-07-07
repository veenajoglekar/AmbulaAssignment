import React, { useState } from "react";
import "./todo.css";

export const Todo = () => {
  const [todoArr, setTodoArr] = useState([]);
  const [addFlag, setAddFlag] = useState(false);
  const [newTask, setNewTask] = useState("");


  const deleteTask = (task) => {
    console.log("Deleting task", task);
    let arr = todoArr.filter(
      (todo) => {
        return todo.desc !== task.desc;
      }
    );
    setTodoArr(arr);
  };

  const completeTask = (task) => {
    let arr = [...todoArr]
    arr.forEach(
      (todo) => {
        todo.checked = todo.desc === task.desc ? !todo.checked : todo.checked;
      }
    );
    setTodoArr(arr)
  }

  const addTask = () => {
    let arr = [...todoArr];
    arr.push({desc: newTask});
    setTodoArr(arr);
    setAddFlag(false)
    setNewTask("");
  }

  return (
    <>
      <div style={{alignItems: 'center'}} className="d-flex justify-content align-items-center">
        <h2>ToDo List</h2>
        <button className="button2" onClick={() => setAddFlag(true)}>Add Task</button>
      </div>

      <div className="container">
        <ul>
          {todoArr.map((todo) => {
            return (
            <li className="todoGrid">
              <input type="checkbox" checked={todo.checked} onChange={() => completeTask(todo)}/>
              <p className={ todo.checked ? 'strike' : '' } style={{ textAlign: "left" }}>{todo.desc}</p>

              <button
                onClick={() => deleteTask(todo)}
                className="button2"
                style={{ backgroundColor: "red" }}
              >
                Delete Task
              </button>
            </li>

            )
          })}
          {addFlag && (
            <li className="todoGrid">
              <input type="checkbox" disabled style={{opacity: '0'}}/>

              <input className="newText" type="text" value={newTask} onChange={(evt) => setNewTask(evt.target.value)} />

              <button className="button2" onClick={() => addTask()} >
               Ok
              </button>
            </li>
          )}
          {
            (todoArr.length === 0 && !addFlag)&& (
              <h2>No tasks added</h2>
            )
          }
        </ul>
        <div className="fluidContainer">
          <h3>Total Tasks : <p>{todoArr.length}</p></h3> 
          <h3>Completed Tasks : <p>{todoArr.filter((x)=>x.checked).length}</p></h3> 
        </div>
      </div>
    </>
  );
};

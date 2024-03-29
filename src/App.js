// import logo from './logo.svg';
import React,{useState} from "react"
import './App.css';
import InputArea from "./InputArea"
import ToDoItem from "./ToDoItem"

function App() {
  const[items,setItems] = useState([])
  function handleItems(inputText)
  {
    setItems((prevValue)=>{
      return [...prevValue,inputText]
    })
  }
  function deleteItem(id)
  {
    setItems((prevValue)=>{
      return prevValue.filter((item,index)=>{
        return index !==git 
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onAdd={handleItems}/>
      <div>
        <ul>
          {items.map((toDoItem,index)=>(
            <ToDoItem 
            text={toDoItem} key={index} id={index} onClicked={deleteItem}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TodoInput from "./Components/P2_To_Do_List_input";
import Todolist from "./Components/P2_To_Do_List_items";
import P2_Current_Time from "./Components/P2_Current_Time";
import P2_To_Do_List_Input_2 from "./Components/P2_To_Do_List_Input_2";


function App() {
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <>
    <div style={{border:'1px solid red',padding : '20px',backgroundColor : 'tomato'}}>
    <P2_Current_Time />
    <div className="main-container">
    <div className="center-container">
      <TodoInput addList={addList}/>

      <h3 className="app-heading">List</h3>
      <hr/>
      {listTodo.map((listItem,i)=>{
        return (
          <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
        )
      })}
    </div>
  </div>
  </div>
  </>
  );
}

export default App;

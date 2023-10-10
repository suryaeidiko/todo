import React,{useState} from "react";

function TodoInput(props) {
    const [inputText,setInputText] = useState('');
    const handleEnterPress = (e)=>{
        if(e.keyCode===13){
            props.addList(inputText)
            setInputText("")
        }
    }
  return (
    <div className="input-container">
    <h2 style={{marginRight :'60px',color : 'green'}}>To Do List</h2>
      <input
        type="text"
        className="input-box-todo"
        placeholder="Add your items"
        value={inputText}
        style={{border:'1px solid black'}}
        onChange={e =>{
            setInputText(e.target.value)
        }}
        onKeyDown={handleEnterPress}
      />
      <button className="add-btn" style={{backgroundColor:'DodgerBlue', marginLeft:'15px',marginRight : '15px'}}
      onClick={()=>{
        props.addList(inputText)
        setInputText("");
        if(inputText.length==0){
          alert('Please add items!!')
        }
      }}>+</button>      
    </div>
  );
}

export default TodoInput;
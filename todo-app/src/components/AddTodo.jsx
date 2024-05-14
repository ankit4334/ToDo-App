import { useState } from "react";
import { BiMessageAdd } from "react-icons/bi";  //icon command ko import kiya hai.
//<BiMessageAdd />  means hum icon add kiye hai jo BiMessageAdd me import kiye hai.

function AddTodo({onNewItem}) {





  const [todoName,setTodoName]=useState("");
  const [dueDate,setDueDate]=useState("");

  const handleNameChange=(event)=>{
    setTodoName(event.target.value)
  }

  const handleDateChange=(event)=>{
    setDueDate(event.target.value)
  }


  const handleAddButtonnClicked=()=>{
    onNewItem(todoName,dueDate);
    setDueDate("");
    setTodoName("");
  }


  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" 
          placeholder="Enter Todo Here" 
          value={todoName}
          onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" 
          value={dueDate}
          onChange={handleDateChange}/>
        </div>
        <div className="col-2">
          <button 
          type="button" 
          className="btn btn-success kg-button"
          onClick={handleAddButtonnClicked}
          >
           <BiMessageAdd />
           
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;

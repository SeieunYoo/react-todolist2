import InputForm from "./Inputform";
import { useState } from "react";

function toDo(){
    const deleteToDoButton = index => {
        InputForm.setToDos(InputForm.toDos.filter((item, todoIndex) => index !== todoIndex));
        
      };
        
      const moveDoneButton = (item,index) =>{
        
        movetoDos((current) => [item, ...current]);
        setToDos(InputForm.toDos.filter((item, todoIndex) => index !== todoIndex));
        
    
      }

return 
<div><ul className ="todo-box">
<span className="title">✍️To Do({InputForm.toDos.length})</span>
{InputForm.toDos.map((item, index) => (
<li key={index}>
<span onClick={() => InputForm.moveDoneButton(item,index)}>✔️ </span>
{item}
<span onClick={() => InputForm.deleteToDoButton(index)}> ❌</span>
</li>
))}



</ul>
</div>
}

export default toDo;
import { useState } from "react";
import './style.css';
import './background.js';
import Clock from './clock.js';
import InputForm from "./Inputform";

  

  function App() {
 
  const [toDo, inputToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [doneToDos, movetoDos] = useState([]); 
  
 
  const onChange = (event) => inputToDo(event.target.value);


  const submitInput = (event) => {
      event.preventDefault();
      if (toDo === "") {
        return;
      }
      setToDos((currentArray) => [toDo, ...currentArray]);
      inputToDo("");

    };

  const deleteToDoButton = index => {
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
    
  };
    
  const moveDoneButton = (item,index) =>{
    
    movetoDos((current) => [item, ...current]);
    setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
    

  }

  const moveToDoButton = (item,index) =>{
   
    setToDos((current) => [item, ...current]);
    movetoDos(doneToDos.filter((item, todoIndex) => index !== todoIndex));
    

  }
    
  const deleteDoneButton = index => {
    movetoDos(doneToDos.filter((item, todoIndex) => index !== todoIndex));
    };

  return (
    <div className="center">
    <Clock></Clock>
    <div className="whiteBox">
     
     <h1>❗투두리스트❗</h1>
    
     <header className = "input-box">
     <form onSubmit={submitInput} >
     <input
        className = "toDo"
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="할 일을 입력하세요"
      />
      <span className = "toDoButton" onClick={submitInput}> +</span>
      </form>
      </header>
      <hr/>
      
      <ul className ="todo-box">
     <span className="title">✍️To Do({toDos.length})</span>
    {toDos.map((item, index) => (
<li key={index}>
<span onClick={() => moveDoneButton(item,index)}>✔️ </span>
{item}
<span onClick={() => deleteToDoButton(index)}> ❌</span>
</li>
))}



</ul>

<hr/>

<ul className = "done-box">
  <span className="title">👻Done({doneToDos.length})</span>
    {doneToDos.map((item, index) => (
    <li className ="done-list" key={index}>
   <span onClick={() => moveToDoButton(item,index)}>📂 </span>
   {item}
   <span onClick={() => deleteDoneButton(index)}> ❌</span>
   </li>
))}
</ul>

  </div>

</div>

  );
    }

    export default App;
  
 
   

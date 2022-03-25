import { useState } from "react";
import styled from "styled-components";
import App from "./App.js";

const StyledButton =  styled.input
`
      width: 300px;
      height: 50px;
      border-radius: 9px;
      font-family: 'SuncheonB';
  `;


   const Styledss =  styled.span
   `cursor: pointer`;


function Inputform(props){
    const [toDo, inputToDo] = useState("");
    const [toDos, setToDos] = useState([]);
    

  const onChange = (event) => inputToDo(event.target.value);


  const submitInput = (event) => {
      event.preventDefault();
      if (props.toDo === "") {
        return;
      }
      setToDos((currentArray) => [toDo, ...currentArray]);
      inputToDo("");

    };


     return <form onSubmit={props.submitInput} >
      <StyledButton
        className = "toDo"
        onChange={onChange}
        value={toDo}
        type="text"
        placeholder="할 일을 입력하세요"
      />
      <Styledss className = "toDoButton" onClick={props.submitInput}> +</Styledss>
    </form> ;


    }

    export default Inputform;
   
    

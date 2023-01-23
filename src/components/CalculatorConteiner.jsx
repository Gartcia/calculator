import { useState } from 'react';
import Button from './Buttons'

export function CalculatorConteiner(){
    const [input, setInput] = useState("")
    const [output, setOutput] = useState(0)
    const [point, setPoint] = useState(true);
    const [lastresult, setLastresult] = useState("");
    function lastNumber(input){
        const index = Array.from(input).findIndex(index => {
            if(index === "*" || index == "/" || index === "+" || index === "-")
            return index
        })
        return index
    }
    function handleClick(id){
        switch(id){
            case "AC":
                setInput("");
                setOutput(0);
                setPoint(true)
                setLastresult("")
                break;
            case "=":
                setInput("");
                setOutput(eval(input));
                setPoint(true)
                setLastresult(eval(input).toString())
                break;
            default:
                if(lastresult !== "" && (id==="+" || id==="/" || id==="*" || id==="-")){
                        setInput(lastresult + id)
                        setOutput(lastresult + id)
                        setLastresult("");
                } else if((input[input.length-1]==="+" ||
                  input[input.length-1]==="*" ||
                  input[input.length-1]==="/" ||
                  input[input.length-1]==="-") && 
                  (id==="+" || id==="/" || id==="*")
                  ){
                    const index = lastNumber(input)
                    setInput(input.slice(0,index) + id)
                    setOutput(input.slice(0,index) + id)
                }else if(input === "0" && id==="0"){
                  setInput(input);
                  setOutput(input);
                } else if(id==="."){
                  if(!point){
                    setInput(input);
                    setOutput(input);
                  } else {
                    setInput(input + id);
                    setOutput(input + id);
                    setPoint(false);
                  }
                } else {
                   setInput(input + id);
                   setOutput(input + id);
                }
                if(id === "+" | id === "/" | id === "*" | id === "-"){
                   setPoint(true)
                }
        }
    }
    return(
    <div className="container p-0 shadow border-top border-bottom border-dark-subtle border-5" style={{width: 400}}>
        <div className="row w-100 m-0">
            <div className="col-12 bg-dark d-flex flex-column justify-content-center align-items-end text-light text-end" id="display" style={{width:"100%", height: 70}}>{input}<br></br><span className='fs-2'>{output}</span></div>
        </div>
        <div className="row m-0">
            <Button number = "AC" handleClick = {handleClick}   bg ='danger' col="12" id="clear" />
        </div>
        <div className="row m-0">
            <Button number = "7"  handleClick = {handleClick}  bg = 'secondary' col="3" id = "seven" />
            <Button number = "8"  handleClick = {handleClick}  bg = 'secondary' col="3" id = "eight" />
            <Button number = "9"  handleClick = {handleClick}  bg = 'secondary' col="3" id = "nine" />
            <Button number = "/"  handleClick = {handleClick}  bg = 'light' col="3" id = "divide" />
        </div>
        <div className="row m-0">
            <Button number = "4"  handleClick = {handleClick}  bg = 'secondary' col="3" id = "four" />
            <Button number = "5"  handleClick = {handleClick}  bg = 'secondary' col="3" id = "five" />
            <Button number = "6"  handleClick = {handleClick}  bg = 'secondary' col="3" id = "six" />
            <Button number = "*"  handleClick = {handleClick}  bg = 'light' col="3" id = "multiply" />
        </div>
        <div className="row m-0">
            <Button number = "1"  handleClick = {handleClick}  bg = 'secondary' col="3" id = "one" />
            <Button number = "2"  handleClick = {handleClick}  bg = 'secondary' col="3" id = "two" />
            <Button number = "3"  handleClick = {handleClick}  bg = 'secondary' col="3" id = "three" />
            <Button number = "-"  handleClick = {handleClick}  bg = 'light' col="3" id = "subtract" />
        </div>
        <div className="row m-0">
            <Button number = "."  handleClick = {handleClick}  bg = 'secondary' col="3" id = "decimal" />
            <Button number = "0"  handleClick = {handleClick}  bg = 'secondary' col="3" id = "zero" />
            <Button number = "="  handleClick = {handleClick}  bg = 'primary' col="3" id = "equals"  />
            <Button number = "+"  handleClick = {handleClick}  bg = 'light' col="3" id = "add"  />
        </div>
    </div>
    );
}

export default CalculatorConteiner
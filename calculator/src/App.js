import { useState } from 'react';
import './App.css';

function App() {

  var [no1, setNo1] = useState("")
  var [op, setOp] = useState(" ")
  var [no2, setNo2] = useState("")
  var [answer, setAnswer] = useState("")

  function deleteAll(){
    setNo1("")
    setOp(" ")
    setNo2("")
    setAnswer("")
  }

  function operator(inputOp) {
    setOp(inputOp)
  }

  function setNumber (no){
    if (op === " ") {
      setNumber1(no)
    }
    else {
      setNumber2(no)
    }
  }

  function setNumber1 (no){
    var number1 = no1
    number1 = number1 + no
    setNo1(number1)
  }

  function setNumber2 (no){
    var number2 = no2
    number2 += no
    setNo2(number2)
  }

  function showAns(){
    // var ans = 2 , op, 3
    switch (op !== ""){
      default :
        var ans = "Do valid operations"
        break;
      case op === "*":
        ans = Number(no1) * Number(no2);
        break;
      case op === "%" :
        ans = Number(no1) % Number(no2);
        break;
      case op === "/":
        ans = Number(no1) / Number(no2);
        break;
      case op === "+":
        ans = Number(no1) + Number(no2);
        break;
      case op === "-":
        ans = Number(no1) - Number(no2);
        break;
    }

    console.log(ans)
    setAnswer(ans)
    // deleteAll()
    // setOp(" ")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Calculator</h2>
        <div id="show-no1"> Number 1 is {no1} </div>
        <div id="show-op"> Operation is " {op}  "</div>
        <div id="show-no2"> Number 2 is {no2} </div>
        <div id="show-ans"> Answer is {answer} </div>
        <div className="row">
        <button onClick={ () => deleteAll() }>AC</button>
        <button onClick={()=> operator("%")}>%</button>
        <button onClick={()=> operator("/")}>/</button>
        </div>
        <div className="row">
        <button onClick={ () => setNumber("7")}>7</button>
        <button onClick={ () => setNumber("8")}>8</button>
        <button onClick={ () => setNumber("9")}>9</button>
        <button onClick={()=> operator("*")}>X</button>
        </div>
        <div className="row">
        <button onClick={ () => setNumber("4")}>4</button>
        <button onClick={ () => setNumber("5")}>5</button>
        <button onClick={ () => setNumber("6")}>6</button>
        <button onClick={()=> operator("-")}>-</button>
        </div>
        <div className="row">
        <button onClick={ () => setNumber("1")}>1</button>
        <button onClick={ () => setNumber("2")}>2</button>
        <button onClick={ () => setNumber("3")}>3</button>
        <button onClick={()=> operator("+")}>+</button>
        </div>
        <div className="row">
        <button onClick={ () => setNumber("0")}>0</button>
        <button>.</button>
        <button onClick={ ()=> showAns()}>=</button>
        </div>
        
      </header>
    </div>
  );
}

export default App;

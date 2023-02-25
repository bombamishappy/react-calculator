import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import './App.css'

function App() {
  const [result, setResult] = useState("0");
  const [cals, setCals] = useState("0");


  function handleClick(object) {
    if (result === "0") {
      setResult(() => "")
    }
    setResult((oldResult) => oldResult.concat(object.target.name))
  }

  /* fuction delete */

  function delAll() {
    setResult(() => "0")
    setCals(() => "0")
  }

  /* function delete ทีละตัว */

  function delOne() {
    if (result.length <= 1) {
      setResult(() => "0")
      return
    }
    setResult((oldResult) => oldResult.slice(0, -1))
  }

  /* return บวก ลบ คูญ หาร รวมถึงเลขทศนิยมด้วย */
  function performOperation() {

    const components = result.match(/[+\-*/]|\d+\.\d+|\d+/g);
    let resultA = parseFloat(components[0]);
    for (let i = 1; i < components.length; i += 2) {
      const operator = components[i];
      const operand = parseFloat(components[i + 1]);
      if (operator === "+") {
        resultA += operand;
      } else if (operator === "-") {
        resultA -= operand;
      } else if (operator === "*") {
        resultA *= operand;
      } else if (operator === "/") {
        resultA /= operand;
      }
      setCals(() => resultA);
    }

  }

  function percen() {
    let arr = ["/", "+", "*", "-"]
    let res = result

    for (let v of arr) {
      res = res.replaceAll(v, ",")
    }
    res = res.split(',')

    let lastNum = res[res.length - 1]
    let val = lastNum / 100
    val = val.toString()

    setResult((prev) => prev.replace(lastNum, val))
  }



  return (
    <div class="container">
      <div class="switch-mode">
        <div class="circle-click"></div>
      </div>
      <div class="screen">
        <div class="result-one">{result}</div>
        <div class="result-two">{cals}</div>
      </div>
      <div class="calculate-body">

        <div class="button">
          <div class="left-side">
            <button name="%" onClick={percen} class="top-symbol">%</button>
            <button onClick={delAll} id="clear" class="top-symbol">AC</button>
            <button onClick={performOperation} class="top-symbol" id="result">=</button>
            <button name="1" onClick={handleClick} class="number">1</button>
            <button name="2" onClick={handleClick} class="number">2</button>
            <button name="3" onClick={handleClick} class="number">3</button>
            <button name="4" onClick={handleClick} class="number">4</button>
            <button name="5" onClick={handleClick} class="number">5</button>
            <button name="6" onClick={handleClick} class="number">6</button>
            <button name="7" onClick={handleClick} class="number">7</button>
            <button name="8" onClick={handleClick} class="number">8</button>
            <button name="9" onClick={handleClick} class="number">9</button>
            <button onClick={handleClick} class="symbol" id="dot">...</button>
            <button name="0" onClick={handleClick} class="number">0</button>
            <button name="." onClick={handleClick} class="number">.</button>
          </div>
          <div class="right-side">
            <button onClick={delOne} class="del top-symbol" id="right-side" ><FontAwesomeIcon icon={faSquareXmark} /></button>
            <button name="+" onClick={handleClick} class="symbol" id="right-side">+</button>
            <button name="-" onClick={handleClick} class="symbol" id="right-side">&ndash;</button>
            <button name="*" onClick={handleClick} class="symbol" id="right-side">&times;</button>
            <button name="/" onClick={handleClick} class="symbol" id="right-side">&divide;</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

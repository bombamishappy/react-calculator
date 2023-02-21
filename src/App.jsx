import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import './App.css'

function App() {
  const [result, setResult] = useState("")

  const handleClick = (e) => {
    setResult(result.concat(e.target.name));




  }
  return (
    <div class="container">
      <div class="switch-mode">
        <div class="circle-click"></div>
      </div>
      <div class="screen">
        <form>
          <input type="text" value={result} />
        </form>
      </div>
      <div class="calculate-body">

        <div class="button">
          <div class="left-side">
            <button onClick={handleClick} class="top-symbol">%</button>
            <button onClick={handleClick} id="clear" class="top-symbol">AC</button>
            <button onClick={handleClick} class="top-symbol" id="result">=</button>
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
            <button class="del top-symbol" id="right-side" ><FontAwesomeIcon icon={faSquareXmark} /></button>
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

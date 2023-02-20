import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareXmark } from '@fortawesome/free-solid-svg-icons';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="container">
        <div class="switch-mode">
            <div class="circle-click"></div>
        </div>
        <div class="screen">
          <input type="text" id="input-field" name="name" />
        </div>
        <div class="calculate-body">
            
            <div class="button">
              <div class="left-side">
              <button class="top-symbol">AC</button>
                <button class="top-symbol">%</button>
                <button class="top-symbol">=</button>        
                <button class="number">1</button>
                <button class="number">2</button>
                <button class="number">3</button>         
                <button class="number">4</button>
                <button class="number">5</button>
                <button class="number">6</button>             
                <button class="number">7</button>
                <button class="number">8</button>
                <button class="number">9</button>      
                <button class="symbol" id="dot">...</button>
                <button class="number">0</button>
                <button class="number">.</button>
              </div>
                <div class="right-side">
                <button class="top-symbol" id="right-side"><FontAwesomeIcon icon={faSquareXmark} /></button>
                <button class="symbol" id="right-side">+</button>
                <button class="symbol" id="right-side">-</button>
                <button class="symbol" id="right-side">*</button>
                <button class="symbol" id="right-side">/</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default App

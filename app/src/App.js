import './App.css';
import Btn from './components/Btn'

import { useState } from 'react'

const btnValues = [ 
  {id: 0, char: '0'},
  {id: 1, char: '1'},
  {id: 2, char: '2'},
  {id: 3, char: '3'},
  {id: 4, char: '4'},
  {id: 5, char: '5'},
  {id: 6, char: '6'},
  {id: 7, char: '7'},
  {id: 8, char: '8'},
  {id: 9, char: '9'},
  {id: 10, char: '+'},
  {id: 11, char: '-'},
  {id: 12, char: '*'},
  {id: 13, char: '/'},
  {id: 14, char: '.'},
  {id: 15, char: 'clr'},
  {id: 16, char: 'enter'}
]

function App() {
  const [input, setInput] = useState('')
  const [answer, setAnswer] = useState('')
  
  const computeAnswer = (str) => {
    let regex = /\W/
    if(regex.test(str)) {
      // eslint-disable-next-line
      let answer = eval(str)
      setAnswer(answer.toFixed(3))
    } else {
      console.log('harmful string');
    }
  }

  return (
    <div className="App">
      <div className="calcBody">

        <div className="calcHeader">
          <div className="calcScreen">{input}</div>
          <div className="calcAnswer">{answer}</div>
        </div>

        <div className="calcModal">
          Check out this fancy React calculator!
        </div>

        <div className="calcBtns">
          {btnValues.map((character) => {
            return (
              <Btn 
                key = {character.id}
                id = {character.id}
                char = {character.char}
                input = {input}
                setInput = {setInput}
                setAnswer = {setAnswer}
                computeAnswer = {computeAnswer}
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

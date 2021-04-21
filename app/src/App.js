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

// Brackets => pOwers => DivMult => AddSub
const computeAnswer = (str) => { // NO WORKY!!!!!!
  console.log('str', str);
  let split1 = str.split('+')
  console.log('split1', split1);

  let split2 = []
  split1.forEach(el => split2.push(el.split('-')))
  console.log('split2', split2);

  let split3 = []
  split2.forEach(el => {
    el.forEach(elem => split3.push(elem.split('*')))
  })
  console.log('split3', split3);

  let split4 = []
  split3.forEach(el => {
    el.forEach(elem => split4.push(elem.split('/')))
  })
  console.log('split4', split4);

  let multiply = 0
  let divide = 0
  let add = 0
  let subtract = 0
  // split4.forEach(arr => {
  //   arr.forEach
  // })

  multiply = split4[1][0] * split4[2][0]
  divide = split4[3][0] / split4[3][1]
  add = split4[0][0] + multiply
  subtract = multiply - divide
  let answer = subtract

  console.log('answer', answer);
  // setAnswer(answer)
}

function App() {
  const [input, setInput] = useState('')
  const [answer, setAnswer] = useState('')

  return (
    <div className="App">
      <div className="calcBody">

        <div className="calcHeader">
          <div className="calcScreen">{input}</div>
          <div className="calcAnswer">{answer}</div>
        </div>

        <div className="calcModal">
          Wrong Answer
          {/* probably don't need a component */}
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

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

  return (
    <div className="App">
      <div className="calcBody">

        <div className="calcHeader">
          <div className="calcScreen">
            <input type="text"  />
          </div>
          <div className="calcAnswer"></div>
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
              />
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;

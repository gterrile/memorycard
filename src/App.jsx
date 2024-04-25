import { useEffect, useState } from 'react'
import './App.css'
import Cards from './Cards'

import { cards } from './Helper'

function App() {

  const [characters, setCharacters] = useState(cards)
  const [bestScore, setBestScore] = useState(0)
  const [currentScore, setCurrentScore] = useState(0)

  function resetGame() {
    currentScore > bestScore ? setBestScore(currentScore) : setBestScore(bestScore)
    setCurrentScore(0)
    setCharacters(cards)
  }

  function updateScore() {
    setCurrentScore(currentScore => {
      return currentScore + 1
    })
  }

  function updateCharacter(id) {
    const targetIndex = characters.findIndex(char => char.id === id)
    
    // create a deep copy of character and update clicked state
    let target = JSON.parse(JSON.stringify(characters))
    target = target.at(targetIndex)
    target.clicked = true
    let updatedCharacters = JSON.parse(JSON.stringify(characters))
    updatedCharacters[targetIndex] = target
    setCharacters(updatedCharacters)
  }
  console.log(characters)
  return (
    <>
      <div>
        <h1>Dragon Ball Memory Card Game</h1>
        <h2>Click on any card but don't click more than once on the same card.</h2>      
        <span>Best Score {bestScore}</span><br/>
        <span>Current Score {currentScore}</span>
      </div><br/>
     <Cards characters={characters} updateCharacter={updateCharacter} updateScore={updateScore} resetGame={resetGame}></Cards>
    </>
  )

}

export default App

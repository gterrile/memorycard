import Card from './Card'
import { useState } from 'react'
import { shuffle } from './Helper'

function Cards ({characters, updateCharacter, updateScore, resetGame}) {
  
  const deck = shuffle(characters)

  function reclass () {
    const fronts = document.querySelectorAll('.fade-out-front')
    fronts.forEach(card => {
      card.classList.remove('fade-out-front')
      card.classList.add('card-front')
    })
  }

  function handleClick(e) {
    const fronts = document.querySelectorAll('.card-front')
    fronts.forEach(card => {
      card.classList.remove('card-front')
      card.classList.add('fade-out-front')
      setTimeout(() => {
        reclass()
      }, 1250)
    })
    console.log(fronts)
    
    let characterTargeted = JSON.parse(JSON.stringify(characters))
    characterTargeted = characterTargeted.filter((character) => character.id === e.target.id)
    if (!characterTargeted[0].clicked) {
      updateCharacter(e.target.id)
      updateScore()
    } else {
      alert('game over')
      resetGame()
    }
  }

  return (
    <div className='cards'>
      {
        deck.map(card => {
          return <Card key={card.id} character={card} handleClick={handleClick} ></Card>
        })
      }
    </div>
  )  
}

export default Cards
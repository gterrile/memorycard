import dragon from './assets/characters/dragon.png'

function Card({character, handleClick}) {
  return (
    
    <div className="card-container">
      <div className="card">
        <img src= {dragon} className="card-back" alt="dragonLogo" />
        <img src={character.img} alt={character.name} className='card-front' id={character.id} onClick={(e)=> handleClick(e)}/>
      </div>
    </div>
  
)
}

export default Card
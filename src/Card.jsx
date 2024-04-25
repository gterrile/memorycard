
function Card({character, handleClick}) {
  return (
    
    <div className="card-container">
      <div className="card">
        <img src="src/assets/characters/dragon.png" className="card-back" alt="dragonLogo" />
        <img src={character.img} alt={character.name} className='card-front' id={character.id} onClick={(e)=> handleClick(e)}/>
      </div>
    </div>
  
)
}

export default Card
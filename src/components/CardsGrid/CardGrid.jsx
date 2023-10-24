import Card from "./Card";

function CardGrid({characters, characterNames, onClick}) {
  return (
    <div className="cards">
      {characterNames.map((characterName, index) => {
        return <Card key={index} title={characterName} image={characters[characterName]} onClick={onClick} />
      })}
    </div>
  )
}

export default CardGrid;
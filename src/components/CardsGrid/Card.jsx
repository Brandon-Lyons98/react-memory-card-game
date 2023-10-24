function Card({name, image, onClick}) {
  return (
    <div className="card" onClick={() => onClick(title)}>
      <div className="name">{name}</div>
      <img src={image}/>
    </div>
  )
}

export default Card;
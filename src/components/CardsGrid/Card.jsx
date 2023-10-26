function Card({title, image, onClick}) {
  return (
    <div className="card" onClick={() => onClick(title)}>
      <div className="name">{title}</div>
      <img src={image}/>
    </div>
  )
}

export default Card;
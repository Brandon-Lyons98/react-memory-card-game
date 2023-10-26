import { useEffect, useState } from "react";
import CardGrid from "./CardsGrid/CardGrid";
import brute from '../assets/Brute.jpeg';
import carter from '../assets/Carter.jpeg';
import cortana from '../assets/Cortana.jpeg';
import emile from '../assets/Emile.jpeg';
import grunt from '../assets/Grunt.jpeg';
import jorge from '../assets/Jorge.jpeg';
import jun from '../assets/Jun.jpeg';
import kat from '../assets/Kat.jpeg';
import nobleSix from '../assets/Noble-Six.jpeg';
import zealot from '../assets/Zealot.jpeg';
import '../styles/Main.css';

function Main() {
  const characterList = {
    Brute: brute,
    Carter: carter,
    Cortana: cortana,
    Emile: emile,
    Grunt: grunt,
    Jorge: jorge,
    Jun: jun,
    Kat: kat,
    NobleSix: nobleSix,
    Zealot: zealot
  }

  const [characterNames, setCharacterNames] = useState(Object.keys(characterList));
  const [clickedCharacters, setClickedCharacters] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const shuffleCards = () => {
    const shuffleCards = [...characterNames];

    for (let i = shuffleCards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      let temp = shuffleCards[randomIndex];
      shuffleCards[randomIndex] = shuffleCards[i];
      shuffleCards[i] = temp;
    }

    setCharacterNames(shuffleCards);
  }

  const handleCardClick = character => {
    if (clickedCharacters.includes(character)) {
      resetScore()
    } else {
      updateScore()
      setClickedCharacters([...clickedCharacters, character])
    }
  }
  
  const updateScore = () => {
    setCurrentScore(currentScore + 1);
    console.log(currentScore)
    if (currentScore >= bestScore) {
      setBestScore(currentScore + 1)
    }
    if (currentScore === Object.keys(characterList).length - 1) {
      alert('You win!');
      resetScore()
    }
  }

  const resetScore = () => {
    setCurrentScore(0);
    setClickedCharacters([])
  }

  useEffect(shuffleCards, [currentScore]);

  return (
    <main className="main">
      <div className="score">
        <div className="current">Current Score: {currentScore}</div>
        <div className="best">Best Score: {bestScore}</div>
      </div>
      <CardGrid characters={characterList} characterNames={characterNames} onClick={handleCardClick} />
    </main>
  )
}

export default Main;
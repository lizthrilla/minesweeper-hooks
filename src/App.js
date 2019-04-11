import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

const App = () => {
  const [data, setData] = useState()
  const [difficulty, setDifficulty] = useState(0)
  const [gameId, setGameId] = useState(0)
  const [board, setBoard] = useState([])
  const [gameState, setGameState] = useState('start')

  const minesweeperAPI = 'http://minesweeper-api.herokuapp.com/games?difficulty'

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(
        `${minesweeperAPI}=${difficulty}`,
      )
      setData(result.data)
      setGameId(result.data.id)
      setBoard(result.data.board)
      setGameState(result.data.state)
    };
    fetchData()
  }, {})

  console.log(gameState)
  return (
    <div className="App">
      <header className="App-header">
        <h1>MineSweeper</h1>
        <h2>{gameId}</h2>
        <h2>{gameState}</h2>
      </header>
    </div>
  );
}

export default App;

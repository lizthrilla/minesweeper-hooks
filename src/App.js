import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import GameBoard from './components/Gameboard'

const App = () => {
  const [data, setData] = useState()
  const [difficulty, setDifficulty] = useState(0)
  const [gameId, setGameId] = useState(0)
  const [board, setBoard] = useState([])
  const [gameState, setGameState] = useState('start')
  const [mines, setMines] = useState(0)

  const minesweeperAPI = 'http://minesweeper-api.herokuapp.com/games'

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.post(
        `${minesweeperAPI}?difficulty=${difficulty}`,
      )
      setData(result.data)
      setGameId(result.data.id)
      setBoard(result.data.board)
      setGameState(result.data.state)
      setMines(result.data.mines)
    };
    fetchData()
  }, {})

  const cellCheck = (x, y ) => {
    console.log(x, y)
    const fetchBoard = async () => {
      const result = await axios.post(
        `${minesweeperAPI}/${gameId}/check?row=${y}&col=${x}`
      )
      setBoard(result.data.board)
      console.log(result.data.board)
    }
    fetchBoard()
  }

  return (
    <div className="App App-header">
        <h1>MineSweeper</h1>
        <h2>{gameState}</h2>
        <h2>{mines}</h2>
        <GameBoard 
          board={board} 
          gameId={gameId} 
          cellCheck={cellCheck} 
        />
    </div>
  );
}

export default App;

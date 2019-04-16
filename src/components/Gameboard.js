import React from 'react'
import Cell from './Cell'

const GameBoard = ({board, gameId, cellCheck}) => {
    // console.log(board)

    const rows = board.map((row, i) => {
        const cols =  row.map((cell, j) => {
            return (
                <Cell 
                    value={cell.toString()} 
                    key={j}
                    handleCheck={() => cellCheck(j, i)} 
                />
            )
        })
        return <tr key={i}>{cols}</tr>
    })

    return(
        <div>
            <h3>{gameId}</h3>
            <table>
                <tbody>{rows}</tbody>
            </table>
        </div>
    )
}

export default GameBoard
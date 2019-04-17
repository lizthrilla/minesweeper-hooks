import React from 'react'

const Cell = ({value, handleCheck}) => {
    // const classMap = {
    //     ' ': 'empty',
    //     '_': 'unrevealed',
    //     'F': 'flagged',
    //     '@': 'flagbomb',
    //     '*': 'bomb'
    // }
    return (
        <td className='cell' onClick={handleCheck}>
            <p className='cellText'>{value}</p>
        </td>
    )
}

export default Cell
import React, { useContext } from 'react'
import BookClubContext from './BookClubContext'

const DisplayPool = () => {
  const { pool, addToCount, removeFromPool } = useContext(BookClubContext)

  const displayPoolWrapperStyling = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flexStart',
    marginTop: '100px'
  }

  const tdStyle = {
    padding: '10px'
  }

  return(
    <table style={displayPoolWrapperStyling}>
      <tbody>
        { pool.map((n, index) => {
          return(
            <tr key={index}>
              <td style={tdStyle}>
                <button onClick={() => { addToCount(n) }}>+</button>
              </td>
              <td style={tdStyle}>{ n.name }</td>
              <td style={tdStyle}>{ n.count }</td>
              <td style={tdStyle}>
                <button onClick={() => { removeFromPool(n) }}>hosted</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default DisplayPool

import React, { useContext } from 'react'
import BookClubContext from './BookClubContext'

const DisplayPool = () => {
  const { pool, addToCount, removeFromPool, toggleKebab } = useContext(BookClubContext)

  const displayPoolWrapperStyling = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flexStart',
    marginTop: '100px',
    borderSpacing: '0',
    borderCollapse: 'collapse'
  }

  const tdStyle = {
    padding: '15px 30px',
    borderTop: '1px solid #140046',
    borderBottom: '1px solid #140046'
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
                <button onClick={(e) => { toggleKebab(e, n) }}>...</button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default DisplayPool

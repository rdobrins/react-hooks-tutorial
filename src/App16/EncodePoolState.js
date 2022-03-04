import React, { Fragment, useState, useContext } from 'react'
import BookClubContext from './BookClubContext'

const EncodePoolState = () => {
  const [encodedText, setEncodedText] = useState(null)
  const { encodePool, poolPresent } = useContext(BookClubContext)

  const encodePoolWrapperStyling = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px'
  }

  const buttonsWrapperStyling = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '20px'
  }

  const pStyling = {
    maxWidth: '400px',
    overflowWrap: 'anywhere'
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(encodedText)
  }

  return(
    <div style={encodePoolWrapperStyling}>
      { encodedText && <p style={pStyling}>{ encodedText }</p> }
      <div style={buttonsWrapperStyling}>
        { !encodedText && poolPresent() &&
          <button onClick={() => { setEncodedText(encodePool()) }}>
            Encode Pool
          </button>
        }
        { encodedText &&
          <Fragment>
            <button onClick={copyToClipboard}>
              Copy to Clipboard
            </button>
            <button onClick={ () => { setEncodedText(null) } }>
              Clear Encoding
            </button>
          </Fragment>
        }
      </div>
    </div>
  )
}

export default EncodePoolState

import React, { Fragment, useContext, useState, useRef, useEffect } from 'react'
import BookClubContext from './BookClubContext'

const PoolInputField = ({ setAreaContent }) => {
  const inputField = useRef(null)

  useEffect(() => {
    inputField.current.focus()
  }, [])

  return(
    <textarea ref={inputField} onChange={(e) => setAreaContent(e.target.value)}></textarea>
  )
}

const SetInitialPool = () => {
  const [showUploader, setShowUploader] = useState(false)
  const [areaContent, setAreaContent] = useState('')
  const { handleEncodedPool } = useContext(BookClubContext)

  const setPoolWrapperStyling = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '100px'
  }

  const buttonsWrapperStyling = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }

  const handleUpload = () => {
    try {
      setShowUploader(false)
      handleEncodedPool(areaContent)
      setAreaContent('')
    } catch (e) {
      console.log(`Error - ${e}`)
    }
  }

  const closeUploader = () => {
    setShowUploader(false)
    setAreaContent('')
  }

  const openUploader = () => {
    setShowUploader(true)
  }

  return(
    <div style={setPoolWrapperStyling}>
      { showUploader &&
        <Fragment>
          <PoolInputField setAreaContent={setAreaContent}/>
          <div style={buttonsWrapperStyling}>
            <button onClick={handleUpload}>
              Set Pool
            </button>
            <button onClick={closeUploader}>
              Close Uploader
            </button>
          </div>
        </Fragment>
      }
      { !showUploader && <button onClick={openUploader}>Upload Initial Pool</button> }
    </div>
  )
}

export default SetInitialPool

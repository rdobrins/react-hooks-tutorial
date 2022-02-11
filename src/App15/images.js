import React, { Fragment, useEffect, useContext, useState } from 'react'
import ApiContext from './context'

const Loading = () => (
  <div>Loading...</div>
)

const SpacePic = ({ image }) => {
  const {
    url,
    title,
    explanation,
    date
  } = image

  return(
    <li>
      <h1>{ title }</h1>
      <img src={ url }/>
      <p>{ date }</p>
      <p>{ explanation }</p>
    </li>
  )
}

const ImagesList = () => {
  const [imagesList, setImagesList] = useState([])

  const { fetchImages } = useContext(ApiContext)

  const apiParams = { count: 2 }

  const handleResponse = (response) => {
    const { data: images } = response

    setImagesList(images)
  }

  useEffect(() => {
    fetchImages(handleResponse, apiParams)
  }, [])

  const fetchMore = () => {
    fetchImages(handleResponse, apiParams)
  }

  if (imagesList.length === 0) return <Loading/>

  return(
    <Fragment>
      <ul>
        { imagesList.map((image, index) => {
          return(
            <SpacePic key={index} image={image} />
          )
        }) }
      </ul>
      <button onClick={fetchMore}>
        Fetch New Images!
      </button>
    </Fragment>
  )
}

export default ImagesList

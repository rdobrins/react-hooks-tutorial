import React, { createContext } from 'react'
import axios from 'axios'
import { axiosClient } from './client'
import { IMAGES_SUB_DIRECTORY, API_KEY } from './env'

const ApiContext = createContext()

export const ApiProvider = (props) => {
  const { children } = props

  const baseGet = (params) => {
    return axiosClient.get(IMAGES_SUB_DIRECTORY, params)
  }

  const baseParams = (componentParams) => {
    return { params: { ...componentParams, api_key: API_KEY }}
  }

  const fetchImages = (callback, params) => {
    const fetchParams = baseParams(params)

    baseGet(fetchParams)
      .then(response => { callback(response) })
      .catch(error => { console.log(error) })
  }

  const fetchImagesConcurrently = (callback, params) => {
    const fetchParams = baseParams(params)

    axios.all([
      baseGet(fetchParams),
      baseGet(fetchParams)
    ]).then(axios.spread((obj1, obj2) => {
      let concatData = []
      const objects = [obj1, obj2]

      for (var i = 0; i < objects.length; i++) {
        concatData = concatData.concat(objects[i].data)
      }

      callback({ data: concatData })
    })).catch(error => { console.log(error) })
  }

  const postComment = async (callback, params) => {
    const postparams = {
      header: { somekey: 'abc123' },
      params: { ...params }
    }

    try {
      const response = await axiosClient.post(
        'https://someplace.com/to/post/to',
        postparams
      )

      console.log(response.data)
      callback(response)
    } catch (e) {
      console.error(e)
    }
  }

  return(
    <ApiContext.Provider value={{
      fetchImages,
      fetchImagesConcurrently,
      postComment
    }}>
      {children}
    </ApiContext.Provider>
  )
}

export default ApiContext

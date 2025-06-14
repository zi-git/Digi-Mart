import React from 'react'
import { useParams } from 'react-router-dom'

function category() {

    const { id } = useParams()

  return (
    <div>category {id}</div>
  )
}

export default category
import React from 'react'
import TvList from './tv.list'

export default function TvComponent(props) {
  return (
    <TvList tvMovie={props.tvMovie} />
  )
}

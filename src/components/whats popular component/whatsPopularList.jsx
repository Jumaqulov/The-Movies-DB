import React from 'react'
import WhatsPopular from './whatsPopular'

export default function WhatsPopularList(props) {
    // console.log("props => ", props);
  return (
    <WhatsPopular movieId={props.popular} />
  )
}

import React from 'react'
import WhatsPopular from './whatsPopular'

export default function WhatsPopularList(props) {
  // console.log('WhatsPopularList =>', props);
  return (
    <WhatsPopular popularTvId={props.popularTvId} />
  )
}

import React from 'react'
import ContentCardComponent from './ContentCard'

export default function ContentListComponent(props) {
  return (
    <div className="row">
      <ContentCardComponent movieList={props.movieList}/>
    </div>
  )
}

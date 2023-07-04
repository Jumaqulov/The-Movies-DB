import React from 'react'
import ContentCardPeople from './ContentCardPeople'

export default function ContentPeopleList(props) {
  return (
    <div className='d-flex flex-wrap'>
      <ContentCardPeople personList={props.personList} />
    </div>
  )
}

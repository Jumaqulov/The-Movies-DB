import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import peopleAbout from '../../repositories/people.about'
import PeopleInfo from '../../components/people info/people.info'


export default function AboutPeople() {
    const [loading, setloading] = useState(false)
    const {id} = useParams()
    const [personInfo , setPersonInfo] = useState([])

    async function getPersonInfo(id) {
        setloading(true)
        const currentPersonIno = await peopleAbout.getpersonInfo(id)
        setPersonInfo(currentPersonIno)
        setloading(false)
    }
    useEffect(() => {
        getPersonInfo(id)
    },[id])
  return (
    <div>
        {
           (loading) ?
                <div className="spinner">
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div> 
            :
                <PeopleInfo personInfo={personInfo} /> 
        }
    </div>
  )
}

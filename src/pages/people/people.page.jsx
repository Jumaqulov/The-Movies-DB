import React from 'react'
import { useEffect , useState } from 'react'
import people from '../../repositories/people'
import ContentPeopleList from '../../components/people/ContentPeopleList'
import ContentCardPeople from '../../components/people/ContentCardPeople'

export default function PeoplePage() {
    const [personList , setPersonList] = useState([])
    const [loading, setloading] = useState(false)


    async function getPersonByName() {
        setloading(true)
        const currentPerson = await people.getPersonByName()
        setPersonList(currentPerson)
        setloading(false)
    }
    useEffect(() => {
        getPersonByName()
    },[])
  return (
    <div className='container'>
        <div className="row">
            <div className="col-12">
                {
                    (loading) ?
                    <div className="spinner">
                        <div className="spinner-border text-success" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
                    :
                    <ContentPeopleList personList={personList} />
                }
            </div>
        </div>
    </div>
  )
}

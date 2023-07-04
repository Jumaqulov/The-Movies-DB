import React, { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'
import popularTvID from '../../repositories/popularTvID'
import WhatsPopularList from '../../components/whats popular component/whatsPopularList'

export default function WhatsPopular() {
    const [loading, setloading] = useState(false)
    const {id} = useParams()
    const [popularTvId, setPopularTvId] = useState([])

    async function getPopularTv() {
      setloading(true)
      const currenMovie = await popularTvID.getWhatsPopularMovieId(id)
      setPopularTvId(currenMovie)
      setloading(false)
    }
    console.log("popularTvId => ", popularTvId);
    useEffect(()=>{
        getPopularTv()
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
            <WhatsPopularList popular={popularTvId} />
        }
    </div>
  )
}

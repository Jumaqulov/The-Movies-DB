import React, { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'
import popularTvID from '../../repositories/popularTvID'
import WhatsPopularList from '../../components/whats popular component/whatsPopularList'
import { AxiosError } from 'axios'

export default function WhatsPopular() {
    const [loading, setloading] = useState(false)
    const {id} = useParams()
    const [popularTvId, setPopularTvId] = useState([])


    
    async function getWhatsPopularTheatr() {
      setloading(true)
      const currenMovie = await popularTvID.getWhatsPopularMovieId(id)
      if(currenMovie == AxiosError) {
        async function getWhatsPopularMovieId() {
          setloading(true)
          const currenMovieID = await popularTvID.getWhatsPopularTheatr(id)
          setPopularTvId(currenMovieID)
          setloading(false)
        }
        getWhatsPopularMovieId()
      } else {
        setPopularTvId(currenMovie)
      }
      setloading(false)
    }
    
    // console.log("popularTvId => ", popularTvId)
    useEffect(()=>{
      getWhatsPopularTheatr()
      // getWhatsPopularMovieId()
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
            <WhatsPopularList popularTvId={popularTvId} />
        }
    </div>
  )
}

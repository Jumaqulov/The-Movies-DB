import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import popularTvID from '../../repositories/popularTvID';
import WhatsPopularList from '../../components/whats popular component/whatsPopularList';

export default function WhatsPopular() {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [popularTvId, setPopularTvId] = useState([]);

  async function getWhatsPopularTheatrr() {
    try {
      setLoading(true);
      const currentMovie = await popularTvID.getWhatsPopularMovieId(id);
      if (!currentMovie) {
        const currentMovieID = await popularTvID.getWhatsPopularTheatr(id);
        setPopularTvId(currentMovieID);
      } else {
        setPopularTvId(currentMovie);
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getWhatsPopularTheatrr();
  }, [id]);

  return (
    <div>
      {loading ? (
        <div className="spinner">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <WhatsPopularList popularTvId={popularTvId} />
      )}
    </div>
  );
}
import repository, { baseUrl, barearToken } from "./repository";
class WhatsPopularId {
  async getWhatsPopularMovieId(id) {
    const endPoint = `tv/${id}`
    const popularMovie = await repository
      .get(baseUrl + endPoint, {
        headers: {
          accept: "application/json",
          Authorization: barearToken,
        },
      })
      .then((ress) => {
        return ress.data
      })
      .catch((err) => {
        console.log(err);
      });
    return popularMovie;
  }

  async getWhatsPopularTheatr(id) {
    const endPoint = `movie/${id}`
    const theatrId = await repository
      .get(baseUrl + endPoint, {
        headers: {
          accept: "application/json",
          Authorization: barearToken,
        },
      })
      .then((ress) => {
        return ress.data
      })
      .catch((err) => {
        console.log(err);
      });
    return theatrId;
  }
}

export default new WhatsPopularId();
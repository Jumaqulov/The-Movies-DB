import repository, { baseUrl, barearToken } from "./repository";
class WhatsPopular {
  async getWhatsPopularMovie(type) {
    const endPoint = `discover/${type}`
    const popularMovie = await repository
      .get(baseUrl + endPoint, {
        headers: {
          accept: "application/json",
          Authorization: barearToken,
        },
      })
      .then((ress) => {
        return ress.data.results
      })
      .catch((err) => {
        console.log(err);
      });
    return popularMovie;
  }
}

export default new WhatsPopular();
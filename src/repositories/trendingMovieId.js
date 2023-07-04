import repository, { baseUrl , barearToken } from "./repository"

class TrendingMovieId {
    async getTrendingMovie(id) {
        const endPoint = `movie/${id}`
        const trendingMovie = await repository.get(baseUrl + endPoint, {
            headers: {
                accept: 'application/json',
                Authorization: barearToken
            }
        })
            .then(ress => {
                return ress.data
            })
            .catch(err => {
                console.log(err);
            })
        return trendingMovie
    }
}

export default new TrendingMovieId()
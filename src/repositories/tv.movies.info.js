import repository, { baseUrl , barearToken } from "./repository";
class TvMovieInfo {
    async getTvMovieInfo(id) {
        const endPoint = `tv/${id}`
        const tvMovie = await repository.get(baseUrl + endPoint, {
            headers: {
                accept: 'application/json',
                Authorization: barearToken
            }
        })
            .then(ress => {
                return ress.data
            })
            .catch(err => {
                console.log(err)
            })
        return tvMovie    
    }
}

export default new TvMovieInfo()
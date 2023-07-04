import repository, { baseUrl , barearToken } from './repository'
class Movie {
    async getMoviesByName(name) {
        const endPoint = `movie/${name}`
        const movies = await repository.get(baseUrl + endPoint, {
            headers: {
                accept: 'application/json',
                Authorization: barearToken
            }
        })
            .then(res => {
                return res.data
            })
            .catch(err => {
                console.log(err)
            })
        return movies
    }
}

export default new Movie()
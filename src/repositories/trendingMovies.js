import repository ,{ baseUrl, barearToken} from './repository'

class Trend {
    async getMovie(type) {
        const endPoint = `trending/all/${type}`
        const movie = await repository.get(baseUrl + endPoint, {
            headers: {
                accept: 'application/json',
                Authorization: barearToken
            }
        })
            .then(ress => {
                return ress.data.results
            })
            .catch(err => {
                console.log(err);
            })
        return movie    
    }
}

export default new Trend()
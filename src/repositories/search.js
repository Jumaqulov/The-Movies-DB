import repository, { baseUrl , barearToken } from "./repository"

class SearchMovie {
    async getSearchedMovie(name) {
        const endPoint =`search/multi?query=${name}`
        const searchMovie = await repository.get(baseUrl + endPoint, {
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
        return searchMovie    
    }
}
export default new SearchMovie()
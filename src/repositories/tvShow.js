import repository, { baseUrl , barearToken } from "./repository";
class Shows {
    async getShowsByName(name) {
        const endPoint = `tv/${name}`
        const shows = await repository.get(baseUrl + endPoint, {
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
        return shows    
    }
}

export default new Shows()
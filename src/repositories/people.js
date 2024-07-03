import repository, { baseUrl , barearToken } from "./repository"
class Person {
    async getPersonByName() {
        const endPoint = 'person/popular'
        const personGet = await repository.get(baseUrl + endPoint , {
            headers: {
                accept: 'application/json',
                Authorization: barearToken
            }
        })
            .then(ress => {
                return ress.data.results
            })
            .catch(err => {
                console.log(err)
            })
        return personGet    
    }
}

export default new Person()
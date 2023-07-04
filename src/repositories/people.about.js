import repository, { baseUrl , barearToken } from "./repository"
class PersonInfo {
    async getpersonInfo(id) {
        const endPoint = `person/${id}`
        const personInfoGet = await repository.get(baseUrl + endPoint ,{
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
        return personInfoGet     
    }
}

export default new PersonInfo()
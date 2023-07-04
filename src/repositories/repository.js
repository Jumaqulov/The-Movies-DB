import Axios from 'axios'
export const baseUrl = 'https://api.themoviedb.org/3/'
export const contentUrl = 'https://image.tmdb.org/t/p/w500'
export const barearToken = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDVkNzc4M2NiNjUzMDk3Mjk4Y2RlOTNkNmQ1NTlkNCIsInN1YiI6IjY0ODgyMzI4YmYzMWYyNTA1NzA3ZWEzZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cMPGwv7mPx83WON8saEKQfhMarCk6hLQ0zYx-BrZs6g'
const client = Axios.create({
    baseUrl: baseUrl,
})
export default client

// https://image.tmdb.org/t/p/w500/qvAAO3VjqG8pQaVxRpFGvs4wD3Z.jpg
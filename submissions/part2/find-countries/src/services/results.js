import axios from 'axios'

const getAllPersons = () => {
    const request = axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    return request.then(response => response.data)
}

export { getAllPersons }
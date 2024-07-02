const { default: axios } = require("axios");



const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api',
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }

})

const getService=()=>axiosClient.get('services?populate=*')
const bookServices=(data)=>axiosClient.post('/reservations')
const rateStar=(data)=>axiosClient.post('/reviews')
const showrate=()=>axiosClient.get('/reviews')
const addService=()=>axiosClient.post('/services')

export default{
    getService,
    bookServices,
    rateStar,
    showrate,
    addService
}

const { default: axios } = require("axios");



const API_KEY=process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient=axios.create({
    baseURL:'http://localhost:1337/api',
    headers: {
        'Authorization': `Bearer ${API_KEY}`
    }

})

const getService=()=>axiosClient.get('services?populate=*')

export default{
    getService
}

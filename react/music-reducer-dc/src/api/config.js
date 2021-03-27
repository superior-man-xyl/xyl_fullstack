import axios from 'axios';

export const baseUrl="http://localhost:3000";

const axiosInstance=axios.create({
    baseUrl:baseUrl
})

export { axiosInstance }
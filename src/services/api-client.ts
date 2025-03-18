import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '70c220ceaf0e43aba0093fa2fad17630'
    }
})
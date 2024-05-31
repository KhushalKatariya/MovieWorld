import axios from "axios";

let axiosInstance=axios.create({
    baseURL : "http://localhost:7544"
})

export default axiosInstance;
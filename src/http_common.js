import axios from "axios";

// export const urlBackend = 'https://3x4.com.ua/';
export default axios.create({
    // baseURL: `${urlBackend}`,

    baseURL: "http://localhost:5027/",
    // baseURL: "/",
    headers:{
        "Content-type":"application/json"
    }
});
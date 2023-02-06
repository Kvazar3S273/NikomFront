import axios from "axios";

// export const urlBackend = 'https://3x4.com.ua/';
export default axios.create({
    // baseURL: `${urlBackend}`,

    baseURL: "/",
    headers:{
        "Content-type":"application/json"
    }
});
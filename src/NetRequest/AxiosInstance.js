import axios from "axios";


const url="https://blogbackendaman.herokuapp.com/"
const instance=axios.create({
    baseURL:url,
})

export default instance;
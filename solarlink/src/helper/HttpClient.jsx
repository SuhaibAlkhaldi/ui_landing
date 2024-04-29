import axios from "axios";

const HttpClient ={
    get:axios.get,
    post:axios.post,
    put:axios.put,
    delete:axios.delete
}
export default HttpClient;
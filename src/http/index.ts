import axios from "axios";
import {ref} from 'vue'

const json = ref("/json")
const http=ref("http://localhost:5001/api")
export const getBanners = () => {
    return axios.get(json.value + "/banner.json");
}
export const getBanners2 = () => {
    return axios.get(http.value + "/Image/GetImages");
}

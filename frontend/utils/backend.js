import axios from "axios";

export async function getSite() {
    const { data } = await axios.get('/api/*')
    return data
}
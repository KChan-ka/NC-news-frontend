import axios from "axios";


export default function getAllArticles() {
    return axios.get(import.meta.env.VITE_API_URL + import.meta.env.VITE_GET_ALL_ARTICLES_URL)
    .then(({data :{articles}}) => {
        console.log(articles, " <<< articles")
        return articles
    })
}
import axios from "axios";


export function getAllArticles() {
    console.log(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_GET_ALL_ARTICLES_URL}`, " <<< making a call")
    return axios.get(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_GET_ALL_ARTICLES_URL}`)
    .then(({data :{articles}}) => {
        return articles
    })
}

export function getArticleById(articleId) {
    console.log(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_GET_ALL_ARTICLES_URL}/${articleId}`, " <<< making call")
    return axios.get(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_GET_ALL_ARTICLES_URL}/${articleId}`)
    .then(({data :{article}}) => {
        return article
    })
}

export function getCommentsByArticleId(articleId) {
    console.log(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_GET_ALL_ARTICLES_URL}/${articleId}/comments`, " <<< making call")
    return axios.get(`${import.meta.env.VITE_API_URL}${import.meta.env.VITE_GET_ALL_ARTICLES_URL}/${articleId}/comments`)
    .then(({data :{comments}}) => {
        return comments
    })
}
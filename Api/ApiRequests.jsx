import axios from "axios";

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 30000,
})

export function getAllArticles() {
    return apiClient.get(`${import.meta.env.VITE_GET_ALL_ARTICLES_URL}`)
    .then(({data :{articles}}) => {
        return articles
    })
}

export function getArticleById(articleId) {
    return apiClient.get(`${import.meta.env.VITE_GET_ALL_ARTICLES_URL}/${articleId}`)
    .then(({data :{article}}) => {
        return article
    })
}

export function getCommentsByArticleId(articleId) {
    return apiClient.get(`${import.meta.env.VITE_GET_ALL_ARTICLES_URL}/${articleId}/comments`)
    .then(({data :{comments}}) => {
        return comments
    })
}

export function patchByArticleId(articleId, body) {
    return apiClient.patch(`${import.meta.env.VITE_GET_ALL_ARTICLES_URL}/${articleId}`, body)
    .then(({data :{article}}) => {
        return article
    })
}

export function getAllUsers() {
    return apiClient.get(`${import.meta.env.VITE_GET_ALL_USERS_URL}`)
    .then(({data :{users}}) => {
        return users
    })
}

export function postCommentByArticleId(articleId, body) {
    return apiClient.post(`${import.meta.env.VITE_GET_ALL_ARTICLES_URL}/${articleId}/comments`, body)
    .then(({data :{comment}}) => {
        return comment
    })
}

export function deleteCommentByCommentId(commentId) {
    return apiClient.delete(`${import.meta.env.VITE_GET_ALL_COMMENTS_URL}/${commentId}`)
    .then(({data :{comment}}) => {
        return comment
    })
}

export function getAllTopics() {
    return apiClient.get(`${import.meta.env.VITE_GET_ALL_TOPICS_URL}`)
    .then(({data :{topics}}) => {
        return topics
    })
}
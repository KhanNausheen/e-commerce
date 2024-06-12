import axios from "axios"
const jwt=localStorage.getItem("jwt")

export const API_BASE_URL = "http://localhost:5454"

 export const api=axios.create({
baseURL:API_BASE_URL,
header:{
    "Authorization":`Bearer ${jwt}`,
    'Content-Type':"application/json"
}

})
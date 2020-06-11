import axios from 'axios';

export default axios.create({
    baseURL: "https://restful.training/api/ping-pong",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer PHMiSM4uqpLgY0CuAeS97fDz55A9AepQR0FrhCFvsbn9SJzjKl0cMtswdBBFRxuntN90wECzmCQ8Ep38"
    }
})
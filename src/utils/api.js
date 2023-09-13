import axios from 'axios';


export function GetUser(username){
    return axios
        .get(`https://api.github.com/users/${username}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("A aparut o eroare:" + error);
        });
        
}

export function GetRepo(username, total_repos = 50){
    return axios
    .get(`https://api.github.com/users/${username}/repos?per_page=${total_repos}&sort=created&direction=desc`)
    .then((response) => {
        return response.data;
    })
    .catch((error) => {
        console.log("A aparut o eroare:" + error);
    });
}
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

export function GetRepo(username){
    // TODO
}
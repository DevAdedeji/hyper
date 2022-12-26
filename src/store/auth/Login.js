import axios from "axios";
const link = 'https://elp-simeon2001.koyeb.app/api/token'

async function login(user){
    return await axios.post(link, {
        "username": `${user.username}`,
        "password": `${user.password}`
    })
    .then(response =>{
        if(response.data.token){
            localStorage.setItem('user', response.data.token)
            window.location.replace('/profile')
        }
    })
}

export default login

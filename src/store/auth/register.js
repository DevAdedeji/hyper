import axios from "axios";

const link = "https://compaym.herokuapp.com/api/register";



async function register(user){
    const response = await axios.post(link, {
        "first_name": `${user.firstName}`,
        "last_name": `${user.surname}`,
        "email": `${user.email}`,
        "username": `${user.username}`,
        "password": `${user.password}` 
    })
}

export default register
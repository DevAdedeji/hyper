import axios from "axios";

export default {
    post(context, data) {
        return new Promise((resolve, reject) => {
            axios.post(context.state.endpoint + data.endpoint, data.details)
                .then(data => {
                    resolve(data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
}
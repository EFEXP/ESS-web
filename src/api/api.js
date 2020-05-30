import axios from 'axios'

const header={
    "Content-Type": "application/json",
    "X-API-KEY": process.env.VUE_APP_KEY
}


export function getMethod(callback,entryPoint) {
    axios.get("https://ess.microcms.io/api/v1/" + entryPoint, {
        headers:header,
        responseType: 'json',
    }).then((res)=>{
        callback(res)
    })

}




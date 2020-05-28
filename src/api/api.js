import axios from 'axios'

const header={
    "Content-Type": "application/json",
    "X-API-KEY": 'c417a40e-5c06-4903-88a2-cc5af6228e8f'
}


export function getMethod(callback,entryPoint) {
    axios.get("https://ess.microcms.io/api/v1/" + entryPoint, {
        headers:header,
        responseType: 'json',
    }).then((res)=>{
        callback(res)
    })

}




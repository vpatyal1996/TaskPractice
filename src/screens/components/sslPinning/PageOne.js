import { fetch } from 'react-native-ssl-pinning';
import {Alert} from 'react-native'

 export const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "GET",
        timeoutInterval: 10000,
        sslPinning: {
            certs: ["mycert"]
        }
    })
        .then(response => {
            console.log(JSON.stringify(response.bodyString, null, "\t"))
            Alert.alert("SSl implemented sccussfully")
        })
        .catch(err => {
            console.log(`error: ${err}`)
        })
  }
  fetchData()

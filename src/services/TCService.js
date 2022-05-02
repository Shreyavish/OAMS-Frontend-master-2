import axios from 'axios'

const TC_BASE_REST_API_URL = 'http://localhost:8080/trafficcontroller';

class TCService{

    getAllTC(){
        return axios.get(TC_BASE_REST_API_URL+"/getTCs",
        {
            headers: {
               authorization: ' xxxxxxxxxx' ,
               'Content-Type': 'application/json'
            } 
         });
    
    }

    createTC(trafficcontroller){
        console.log(trafficcontroller)
        return axios.post(TC_BASE_REST_API_URL+"/addTC", trafficcontroller,
        {
            headers: {
               authorization: ' xxxxxxxxxx' ,
               'Content-Type': 'application/json'
            } 
         });
    }
    
}

export default new TCService();
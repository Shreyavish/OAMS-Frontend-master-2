import axios from 'axios'

const FAA_BASE_REST_API_URL = 'http://localhost:8080/faa_test';

class FAATestService{

    getAllFAATests(){
        return axios.get(FAA_BASE_REST_API_URL+"/getfaatests", {
            headers: {
               authorization: ' xxxxxxxxxx' ,
               'Content-Type': 'application/json'
            } 
         });
    
    }

    createFAATest(faa_test){
        console.log(faa_test)
        return axios.post(FAA_BASE_REST_API_URL+"/addfaatest", faa_test,
        {
            headers: {
               authorization: ' xxxxxxxxxx' ,
               'Content-Type': 'application/json'
            } 
         });
    
    }
}

export default new FAATestService();
import axios from 'axios'

const EXPERT_BASE_REST_API_URL = 'http://localhost:8080/Expert';

class ExpertService{

    getAllExperts(){
        return axios.get(EXPERT_BASE_REST_API_URL+"/getexperts",
        {
            headers: {
               authorization: ' xxxxxxxxxx' ,
               'Content-Type': 'application/json'
            } 
         });
    
    }

    createExpert(Expert){
        console.log(Expert)
        return axios.post(EXPERT_BASE_REST_API_URL+"/addexpert", Expert,
        {
            headers: {
               authorization: ' xxxxxxxxxx' ,
               'Content-Type': 'application/json'
            } 
         });
    
    }
}

export default new ExpertService();

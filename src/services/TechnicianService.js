import axios from 'axios'

const TECHNICIAN_BASE_REST_API_URL = 'http://localhost:8080/technician';

class TechnicianService{

    getAllTech(){
        return axios.get(TECHNICIAN_BASE_REST_API_URL+"/gettechnicians",
        {
            headers: {
               authorization: ' xxxxxxxxxx' ,
               'Content-Type': 'application/json'
            } 
         });
    
    }

    createTech(Technician){
        console.log(Technician)
        return axios.post(TECHNICIAN_BASE_REST_API_URL+"/addtechnician", Technician,
        {
            headers: {
               authorization: ' xxxxxxxxxx' ,
               'Content-Type': 'application/json'
            } 
         });
    
    }
}

export default new TechnicianService();
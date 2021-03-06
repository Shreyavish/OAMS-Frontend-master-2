import axios from 'axios'

const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/employee-controller';

class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL + '/getEmployees', {
            headers: {
               authorization: ' xxxxxxxxxx' ,
               'Content-Type': 'application/json'
            } 
         });
    }
    

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL + '/insertemployee', employee, {
            headers: {
               authorization: ' xxxxxxxxxx' ,
               'Content-Type': 'application/json'
            } 
         });
    }
    

}

export default new EmployeeService();

import React, {useState, useEffect} from 'react'

import EmployeeService from '../services/EmployeeService'

const AddEmployeeComponent = () => {

    const [ssn, setSsn] = useState('')
    const [emailId, setEmail] = useState('')
    const [ename, setename] = useState('')
    const [address, setAddress] = useState('')
    const [salary, setSalary] = useState('')
    const [union_mem_no, setUnionNo] = useState('')
    const [phone, setPhoneNo] = useState('')
    const [role, setERole] = useState('')

    const [employee, setEmployee] = useState([])
    

    const saveEmployee = (e) => {
        e.preventDefault();

        const employee = {ssn,emailId, ename, address, salary, union_mem_no, phone, role}

     
            EmployeeService.createEmployee(employee).then((response) =>{

                console.log(response.data)
                getAllEmployees()
    
            
    
            }).catch(error => {
                console.log(error)
            })
        
        
    }

    
    useEffect(() => {

        getAllEmployees();
    }, [])

    const getAllEmployees = () => {
        EmployeeService.getAllEmployees().then((response) => {
            setEmployee(response.data)
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })
    }

    const title = () => {

       
        return <h2 className = "text-center">Add new Employee</h2>
  

}
const title2 = () => {

   
    return <h2 className = "text-center">The list of Employees </h2>


}

    return (
        <div>
           <br /><br />
           <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title()
                       }
                        <div className = "card-body">
                            <form>
                            <div className = "form-group mb-2">
                                    <label className = "form-label"> SSN :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter SSN"
                                        name = "SSN"
                                        className = "form-control"
                                        value = {ssn}
                                        onChange = {(e) => setSsn(e.target.value)}
                                    >
                                    </input>
                                </div>
                            <div className = "form-group mb-2">
                                    <label className = "form-label"> Email :</label>
                                    <input
                                        type = "email"
                                        placeholder = "Enter email Id"
                                        name = "Email"
                                        className = "form-control"
                                        value = {emailId}
                                        onChange = {(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> ename :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Name"
                                        name = "ename"
                                        className = "form-control"
                                        value = {ename}
                                        onChange = {(e) => setename(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Address :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Address"
                                        name = "Address"
                                        className = "form-control"
                                        value = {address}
                                        onChange = {(e) => setAddress(e.target.value)}
                                    >
                                    </input>
                                </div>

                               

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Salary :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Salary"
                                        name = "Salary"
                                        className = "form-control"
                                        value = {salary}
                                        onChange = {(e) => setSalary(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Union No :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Union Mem No"
                                        name = "Union_mem_no"
                                        className = "form-control"
                                        value = {union_mem_no}
                                        onChange = {(e) => setUnionNo(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> Phone No :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter Phone Number"
                                        name = "Phone_no"
                                        className = "form-control"
                                        value = {phone}
                                        onChange = {(e) => setPhoneNo(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className = "form-group mb-2">
                                    <label className = "form-label"> ERole :</label>
                                    <input
                                        type = "text"
                                        placeholder = "Enter first name"
                                        name = "ERole"
                                        className = "form-control"
                                        value = {role}
                                        onChange = {(e) => setERole(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className = "btn btn-success" onClick = {(e) => saveEmployee(e)} >Submit </button>
                                
                            </form>

                        </div>
                    </div>
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                       {
                           title2()
                       }
                       
                        <div className = "card-body">
                        <table className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                        
                                        <th> SSN  </th>
                                        <th> Email  </th>
                                        <th> ename  </th>
                                        <th> Address  </th>
                                        <th> Salary  </th>
                                        <th> Union No  </th>
                                        <th> ERole  </th>
                    
                                       
                                        </tr>
                                        
                                    </thead>
                                    <tbody>
                                        {
                                            employee.map(
                                                employee =>
                                                <tr key = {employee.ssn}> 
                                                    <td> {employee.ssn} </td>
                                                    <td> {employee.emailId} </td>
                                                    <td> {employee.ename} </td>
                                                    <td> {employee.address} </td>
                                                    <td> {employee.salary} </td>
                                                    <td> {employee.union_mem_no} </td>
                                                    <td> {employee.role} </td>
                                                    
                                                    
                                                </tr>
                                            )
                                        }
                                    </tbody>
                        </table>
                        </div>
                        </div>


                </div>

           </div>

        </div>
    )
}

export default AddEmployeeComponent

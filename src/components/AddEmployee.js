import React, { useState } from "react";
import EmployeeSerive from "../services/EmployeeSerive";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id: "",
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  const saveEmployee = (e) => {
    e.preventDefault();
    //EmployeeSerive.saveEmployee(employee)
    const response = axios
      .post("http://localhost:8080/employee", employee)
      .then((Response) => {
        console.log(Response);
        navigate("/employee")
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  const reset = (e) => {
    e.preventDefault();
    setEmployee({
      id: "",
      firstName: "",
      lastName: "",
      emailId: "",
    });
  }

  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl  tracking-wider">
          <h1>Add New Employee</h1>
        </div>
        <div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              First Name
            </label>
            <input
              type="text"
              className="h-10 w-96 border mt-2 px-2 py-2"
              name="firstName"
              value={employee.firstName}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
        </div>
        <div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              Last Name
            </label>
            <input
              type="text"
              className="h-10 w-96 border mt-2 px-2 py-2"
              name="lastName"
              value={employee.lastName}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
        </div>
        <div>
          <div className="items-center justify-center h-14 w-full my-4">
            <label className="block text-gray-600 text-sm font-normal">
              Email
            </label>
            <input
              type="text"
              className="h-10 w-96 border mt-2 px-2 py-2"
              name="emailId"
              value={employee.emailId}
              onChange={(e) => handleChange(e)}
            ></input>
          </div>
        </div>
        <div>
          <div className="items-center justify-center h-14 w-full my-4 space-x-4 pt-3">
            <button
              onClick={saveEmployee}
              className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
            >
              Save
            </button>
            <button 
            onClick={reset}
            className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6">
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEmployee;

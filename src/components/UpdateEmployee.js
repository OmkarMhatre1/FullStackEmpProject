import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmployeeSerive from "../services/EmployeeSerive";
import axios from "axios";

const UpdateEmployee = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    id: id,
    firstName: "",
    lastName: "",
    emailId: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setEmployee({ ...employee, [e.target.name]: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeSerive.getEmployesById(id);
        setEmployee(response.data); 
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const updateEmp = (e) => {
    e.preventDefault();
    // const response = axios
    //   .put("http://localhost:8080/employee/{id}")
    //   .then((response) => {
    //     navigate("/employee");
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    EmployeeSerive.updateEmployee(employee, id)
      .then((response) => {
        navigate("/employee");
      })
      .catch((error) => {
        console.log(error);
      });
  };



  return (
    <div className="flex max-w-2xl mx-auto shadow border-b">
      <div className="px-8 py-8">
        <div className="font-thin text-2xl  tracking-wider">
          <h1>Update Employee</h1>
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
              onClick={updateEmp}
              className="rounded text-white font-semibold bg-green-400 hover:bg-green-700 py-2 px-6"
            >
              Update
            </button>
            <button
              onClick={() => navigate("/employee")}
              className="rounded text-white font-semibold bg-red-400 hover:bg-red-700 py-2 px-6"
            >
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateEmployee;

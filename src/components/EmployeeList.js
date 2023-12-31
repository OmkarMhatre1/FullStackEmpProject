import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmployeeSerive from "../services/EmployeeSerive";
import axios from "axios";
import Employee from "./Employee";

const EmployeeList = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [employees, setEmployees] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:8080/employee");
        console.log(response);
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteEmp = (e, id) => {
    e.preventDefault();
    EmployeeSerive.deleteEmployee(id).then((res) => {
      if (employees) {
        setEmployees((prevElment) => {
          return prevElment.filter((employee) => employee.id !== id);
        });
      }
    });
  };

  return (
    <div className="container mx-auto my-8">
      <div className="h-12">
        <button
          onClick={() => navigate("/addEmployee")}
          className="rounded bg-slate-600 text-white px-6
        py-2 font-semibold"
        >
          Add Employee
        </button>
      </div>
      <div className="flex shadow border-b">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left font-medium text-green-500 uppercase tracking-wider py-3 px-6">
                First Name
              </th>
              <th className="text-left font-medium text-green-500 uppercase tracking-wider py-3 px-6">
                Last Name
              </th>
              <th className="text-left font-medium text-green-500 uppercase tracking-wider py-3 px-6">
                EmailId
              </th>
              <th className="text-right font-medium text-green-500 uppercase tracking-wider py-3 px-6">
                Actions
              </th>
            </tr>
          </thead>
          {!loading && (
            <tbody className="bg-white">
              {employees.map((employee) => (
                <Employee
                  employee={employee}
                  deleteEmp={deleteEmp}
                  key={employee.id}
                />
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;

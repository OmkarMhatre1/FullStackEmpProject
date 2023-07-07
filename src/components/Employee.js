import React from "react";
import { useNavigate } from "react-router-dom";

const Employee = ({ employee, deleteEmp }) => {
  const navigate = useNavigate();

  const editEmployee = (e, id) => {
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  };

  return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-500">{employee.emailId}</div>
      </td>
      <td className="text-right px-6 py-4 whitespace-nowrap">
        <a
          onClick={(e, id) => editEmployee(e, employee.id)}
          className="px-4 hover:cursor-pointer text-indigo-600 hover:text-indigo-800"
        >
          Edit
        </a>
        <a
          onClick={(e, id) => deleteEmp(e, employee.id)}
          className="px-4 hover:cursor-pointer text-indigo-600 hover:text-indigo-800"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Employee;

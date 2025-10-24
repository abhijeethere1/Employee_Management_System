import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddDepartment = () => {
  const [department, setDepartment] = useState({
    dep_name: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDepartment({ ...department, [name]: value });
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/department/add",
        department,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        navigate("/admin-dashboard/departments");
      }
    } catch (error) {
      if (error.response && error.response.data.error) {
        alert(error.response.data.error);
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96">
      <h2 className="text-2xl font-bold mb-6">Add New Department</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label
            className="text-sm font-medium text-gray-700"
            htmlFor="dep_name"
          >
            Department Name
          </label>
          <input
            className="mt-1 w-full p-2 border border-gray-300 rounded-md"
            required
            type="text"
            placeholder="Enter Dep. Name"
            name="dep_name"
            onChange={handleChange}
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
            rows="4"
            name="description"
            placeholder="Description"
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="w-full mt-6 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded">
          Add Department
        </button>
      </form>
    </div>
  );
};

export default AddDepartment;

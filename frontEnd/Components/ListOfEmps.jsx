import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function ListOfEmps() {
  // State to hold employees list
  const [emps, setEmps] = useState([]);
  const navigate = useNavigate();

  // Navigate to Employee details page with employee object
  const gotoEmployee = (empObj) => {
    navigate("/employee", { state: empObj });
  };

  // Navigate to Edit Employee page with employee object
  const gotoEditEmployee = (empObj) => {
    navigate("/edit-emp", { state: empObj });
  };

  // Delete employee by ID and refresh list
  const deleteEmpByID = async (id) => {
    let res = await axios.delete(`http://localhost:4000/emp-api/employees/${id}`);
    if (res.status === 200) {
      getEmps(); // refresh after deletion
    }
  };

  // Fetch employees from backend API
  async function getEmps() {
    let res = await axios.get("http://localhost:4000/emp-api/employees");
    if (res.status === 200) {
      let resObj = res.data;
      setEmps(resObj.payload); // update state with employees
    }
  }

  // Load employees when component mounts
  useEffect(() => {
    getEmps();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-black py-10 px-8">
      {/* Page heading */}
      <h1 className="text-4xl font-extrabold text-center text-indigo-400 mb-10 tracking-wide">
        List of Employees
      </h1>

      {/* Employee cards grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {emps.map((empObj) => (
          <div
            key={empObj._id}
            className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 p-6 flex flex-col justify-between"
          >
            {/* Employee info */}
            <div>
              <p className="text-gray-300 font-medium">{empObj.email}</p>
              <p className="text-xl font-semibold text-white mb-4">{empObj.name}</p>
            </div>

            {/* Action buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={() => gotoEmployee(empObj)}
                className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition"
              >
                View
              </button>
              <button
                onClick={() => gotoEditEmployee(empObj)}
                className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition"
              >
                Edit
              </button>
              <button
                onClick={() => deleteEmpByID(empObj._id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps;

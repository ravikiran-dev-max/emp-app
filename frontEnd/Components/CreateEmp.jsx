import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router";

function CreateEmp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onFormSubmit = async (newEmpObj) => {
    try {
      setLoading(true);
      let res = await fetch(`${import.meta.env.VITE_API_URL}/employees`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj),
      });

      if (res.status === 201) {
        navigate("/list");
      } else {
        let errorRes = await res.json();
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <p className="text-center text-2xl font-semibold">Loading...</p>;
  }
  if (error) {
    return <p className="text-red-600 text-center text-xl">{error}</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-gray-900 via-gray-800 to-black ml-90">
      {/* Floating Form Card */}
      <div className="bg-white/10 backdrop-blur-lg border border-gray-700 rounded-2xl shadow-2xl p-10 w-full max-w-lg">
        <h1 className="text-4xl font-extrabold text-center text-indigo-400 mb-8 tracking-wide drop-shadow-lg">
          Create New Employee
        </h1>

        <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-3">
          {/* Name */}
          <input
            type="text"
            placeholder="Enter name"
            {...register("name", { required: "Name is required" })}
            className="w-full border border-gray-600 bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
          />
          {errors.name && (
            <p className="text-red-400 text-sm">{errors.name.message}</p>
          )}

          {/* Email */}
          <input
            type="email"
            placeholder="Enter Email"
            {...register("email", { required: "Email is required" })}
            className="w-full border border-gray-600 bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
          />
          {errors.email && (
            <p className="text-red-400 text-sm">{errors.email.message}</p>
          )}

          {/* Mobile */}
          <input
            type="number"
            placeholder="Enter mobile number"
            {...register("mobile")}
            className="w-full border border-gray-600 bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
          />

          {/* Designation */}
          <input
            type="text"
            placeholder="Enter designation"
            {...register("designation")}
            className="w-full border border-gray-600 bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
          />

          {/* Company Name */}
          <input
            type="text"
            placeholder="Enter company name"
            {...register("companyName")}
            className="w-full border border-gray-600 bg-gray-900 text-gray-100 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-400"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300"
          >
            Add Employee
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateEmp;

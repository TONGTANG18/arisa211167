import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
const FormData = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const submitForm = (event) => {
    event.preventDefault();
    navigate("/result", { state: { formData } });
  };
  return (
    <div className="min-h-screen  flex items-center justify-center">
    <div className="bg-white  rounded-lg p-8 w-full max-w-lg">
      <h1 className="text-2xl font-bold text-black-800 text-center mb-6">
        ภาษีเงินได้:
      </h1>
      <form onSubmit={submitForm} className="space-y-4">
        <div>
          <label htmlFor="salary" className="block text-gray-600 font-medium">
            เงินเดือน:
          </label>
          <input
            type="text"
            name="salary"
            id="salary"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="bonus" className="block text-gray-600 font-medium">
            โบนัส:
          </label>
          <input
            type="text"
            name="bonus"
            id="bonus"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label
            htmlFor="security"
            className="block text-gray-600 font-medium"
          >
           ประกันสังคม:
          </label>
          <input
            type="text"
            name="security"
            id="security"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1  focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="child" className="block text-gray-600 font-medium">
            จำนวนบุตร:
          </label>
          <input
            type="text"
            name="child"
            id="child"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1  focus:ring-black-400"
          />
        </div>
        <div>
          <label
            htmlFor="insurance"
            className="block text-gray-600 font-medium"
          >
            ค่าเบี้ยประกันชีวิต:
          </label>
          <input
            type="text"
            name="insurance"
            id="insurance"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 mt-1  focus:ring-blue-400"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600  focus:ring-blue-400"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
  );
};
export default FormData;

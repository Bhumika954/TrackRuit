import React, { useState } from 'react';

const Tracker = () => {
  const [resumes, setResumes] = useState([]);

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumes((prev) => [...prev, file.name]);
    }
  };

  const handleDelete = (index) => {
    const updated = [...resumes];
    updated.splice(index, 1);
    setResumes(updated);
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-50 shadow-md rounded-md mt-6">
      <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">📂 Resume Tracker</h1>

      <div className="mb-6">
        <label className="block mb-2 text-gray-600 font-medium">Upload Resume:</label>
        <input
          type="file"
          onChange={handleUpload}
          className="block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
      </div>

      {resumes.length === 0 ? (
        <p className="text-center text-gray-500">No resumes uploaded yet.</p>
      ) : (
        <ul className="space-y-4">
          {resumes.map((resume, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-4 bg-white rounded shadow-sm hover:shadow-md transition"
            >
              <span className="text-gray-800">{resume}</span>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tracker;

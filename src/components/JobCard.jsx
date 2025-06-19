import React from 'react';
import { useNavigate } from 'react-router-dom';

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/job/${job.job_id}`, { state: { job } });
  };

  return (
    <div
      className="bg-white shadow-lg rounded-xl p-6 mb-6 hover:shadow-xl transition-all duration-300"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <h2 className="text-xl font-semibold text-blue-700 mb-2">{job.job_title}</h2>
      <p className="text-gray-600 mb-1"><strong>Company:</strong> {job.employer_name}</p>
      <p className="text-gray-600 mb-1"><strong>Location:</strong> {job.job_city}, {job.job_country}</p>
      <p className="text-gray-500 text-sm mb-4 line-clamp-2">{job.job_description.slice(0, 120)}...</p>
      <button className="btn btn-primary">View Details</button>
    </div>
  );
};

export default JobCard;

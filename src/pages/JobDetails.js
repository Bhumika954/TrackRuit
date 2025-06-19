import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const JobDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const job = state?.job;

  if (!job) {
    return (
      <p className="text-center text-red-500 mt-10 text-lg">
        ❌ Job not found. It might be expired or incorrect URL.
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-8">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">{job.job_title}</h1>
      <div className="text-gray-700 space-y-2">
        <p><strong>Company:</strong> {job.employer_name}</p>
        <p><strong>Location:</strong> {job.job_city}, {job.job_country}</p>
        <p><strong>Remote:</strong> {job.job_is_remote ? 'Yes' : 'No'}</p>
        <p><strong>Job Type:</strong> {job.job_employment_type}</p>
        <p><strong>Posted At:</strong> {job.job_posted_at_datetime_utc}</p>
      </div>
      <p className="text-gray-600 mt-4 whitespace-pre-line">{job.job_description}</p>
      <a
        href={job.job_apply_link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded shadow mr-4"
      >
        Apply Now
      </a>
      <button
        className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded shadow"
        onClick={() => navigate(-1)}
      >
        ← Go Back
      </button>
    </div>
  );
};

export default JobDetails;

import React, { useEffect, useState } from 'react';
import JobCard from '../components/JobCard';

const Home = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch(
          'https://jsearch.p.rapidapi.com/search?query=software%20developer&num_pages=10',
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '1eebecf2bdmsh45c690abe2a8029p1d7871jsnc51b21f4076f',
              'X-RapidAPI-Host': 'jsearch.p.rapidapi.com',
            },
          }
        );

        const data = await response.json();
        setJobs(data.data || []); // Safe access
        setLoading(false);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to fetch jobs. Try again later.");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-8">💼 Explore Jobs</h1>

      {loading && (
        <p className="text-center text-gray-500 text-lg">Loading jobs...</p>
      )}

      {error && (
        <p className="text-center text-red-500 text-lg">{error}</p>
      )}

      {!loading && !error && (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job) => (
            <JobCard key={job.job_id} job={job} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;

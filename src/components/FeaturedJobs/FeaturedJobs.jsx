import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then((res) => res.json())
            .then(data => setJobs(data))
    }, []);
    return (
        <div>
            <div className="text-center space-y-4">
                <h2 className="text-5xl font-bold">Featured Jobs {jobs.length}</h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length && 'hidden'}>
                <div className="text-center">
                    <button onClick={() => setDataLength(jobs.length)} className="btn text-white font-bold bg-[#7E90FE]">Show All Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default FeaturedJobs;
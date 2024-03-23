import { useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { pickItem } from "../utlity/localstorage";
import SelectJob from "../SelectJob/SelectJob";
import { IoIosArrowDown } from "react-icons/io";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [jobsApplied, setJobsApplied] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);
    const [open, setOpen] = useState(false);
    const dropDownRef = useRef(null);

    useEffect(() => {
        const close = (e) => {
            if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', close);
        return () => document.removeEventListener('mousedown', close)
    }, []);

    const handleJobFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(jobsApplied);
        } else if (filter === 'remote') {
            const remoteJobs = jobsApplied.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        } else if (filter === 'onside') {
            const onsideJobs = jobsApplied.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsideJobs);
        }
    };

    useEffect(() => {
        const storedJobIds = pickItem();
        if (jobs.length > 0) {
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));
            setJobsApplied(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs]);


    return (
        <div>
            <h2>Jobs all {jobsApplied.length}</h2>
            <div className="float-right my-10">
                <div ref={dropDownRef} className="relative w-fit text-white">
                    <button onClick={() => setOpen((prev) => !prev)} className="rounded-lg bg-gray-300 text-black font-semibold px-6 py-2 flex items-center gap-2">Filter By <IoIosArrowDown className="text-2xl" /></button>
                    <ul className={`${open ? 'visible' : 'invisible'} absolute top-12 z-50 w-full space-y-1 rounded-sm shadow-md`}>
                        <li onClick={() => handleJobFilter('all')} className={`rounded-sm cursor-pointer bg-sky-400 p-2 ${open ? 'opacity-100 duration-500' : 'opacity-0 duration-150'} hover:bg-sky-500`}> All
                        </li>
                        <li onClick={() => handleJobFilter('remote')} className={`rounded-sm cursor-pointer bg-sky-400 p-2 ${open ? 'opacity-100 duration-500' : 'opacity-0 duration-150'} hover:bg-sky-500`}> Remote
                        </li>
                        <li onClick={() => handleJobFilter('onside')} className={`rounded-sm cursor-pointer bg-sky-400 p-2 ${open ? 'opacity-100 duration-500' : 'opacity-0 duration-150'} hover:bg-sky-500`}> Onside
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                {
                    displayJobs.map(job => <SelectJob key={job.id} job={job}></SelectJob>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;
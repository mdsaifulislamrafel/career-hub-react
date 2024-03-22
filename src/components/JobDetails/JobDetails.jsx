import { useLoaderData, useParams } from "react-router-dom";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { IoCalendarClear } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const job = jobs.find(job => job.id === parseInt(id));
    const { job_description, educational_requirements, job_responsibility, experiences, contact_information, salary, job_title } = job;

    const handleApplyJob = () => {
        toast.success('Job applied successfully')
    };

    return (
        <div className="my-5 p-5 lg:p-0">
            <h1 className="text-3xl text-center font-bold my-8">Job Details</h1>
            <div className="lg:flex gap-5">
                <div className="p-5 w-full md:w-[65%] space-y-5">
                    <h2><span className="font-bold">Job Description</span> : {job_description}</h2>
                    <h2><span className="font-bold">Job Responsibility</span> : {job_responsibility}</h2>
                    <h2 className="font-bold">Educational Requirements :</h2>
                    <p>{educational_requirements}</p>
                    <h2 className="font-bold">Experiences :</h2>
                    <p>{experiences}</p>
                </div>

                <div className="w-full md:w-[35%] space-y-4 rounded-lg">
                    <div className="space-y-5 bg-[#7E90FE1A]  p-6">
                        <h1 className="text-lg font-semibold">Job Details</h1>
                        <p className="flex items-center gap-1"><RiMoneyDollarCircleLine className="text-xl text-[#7E90FE]" /><span className="font-bold">Salary</span> : {salary}</p>
                        <p className="flex items-center gap-1"><IoCalendarClear className="text-xl text-[#7E90FE]" /><span className="font-bold">Job Title</span> : {job_title}</p>
                        <h2 className="font-bold">Contact Information</h2>
                        <hr className="border-2" />
                        <div className="space-y-2">
                            <p><span className="font-bold">Phone :</span> {contact_information.phone}</p>
                            <p><span className="font-bold">Email :</span> {contact_information.email}</p>
                            <p><span className="font-bold">Address :</span>{contact_information.address}</p>
                        </div>
                    </div>
                    <button onClick={handleApplyJob} className="px-4 py-2 w-full bg-[#7E90FE] hover:bg-gray-800 text-white border duration-300 rounded-md">View Details</button>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default JobDetails;
/* eslint-disable react/prop-types */
import { CiLocationOn } from "react-icons/ci";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { Link } from "react-router-dom";
const SelectJob = ({ job }) => {
    const { id, logo, job_title, remote_or_onsite, job_type, company_name, salary, location } = job;
    return (
        <div>
            <div className=" space-y-4 rounded-lg  p-6 border mt-10 w-full bg-white flex justify-between items-center">
                <div className="flex gap-5">
                    <div className="bg-gray-200 p-20 rounded-lg">
                        <img alt="card navigate ui" src={logo} />
                    </div>
                    <div className="grid gap-2">
                        <h1 className="text-lg font-semibold ">{job_title}</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{company_name}</p>
                        <div className="text-lg font-semibold  ">$99.99</div>
                        <div className="flex gap-5">
                            <button className="px-4 py-2 bg-white text-[#7E90FE] font-bold hover:bg-gray-800 hover:text-white border-[#7E90FE] border duration-300 rounded-md">{remote_or_onsite}</button>
                            <button className="px-4 py-2 bg-white text-[#7E90FE] font-bold hover:bg-gray-800 hover:text-white border-[#7E90FE] border duration-300 rounded-md">{job_type}</button>
                        </div>
                        <div className="flex gap-10">
                            <div className="flex items-center gap-1">
                                <CiLocationOn className="text-xl" />
                                <p>{location}</p>
                            </div>
                            <div className="flex items-center gap-1">
                                <RiMoneyDollarCircleLine className="text-xl" />
                                <p>{salary}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4">
                    <Link to={`/job/${id}`}><button className="px-4 py-2 h-fit bg-[#7E90FE] hover:bg-gray-800 text-white border duration-300 rounded-md">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default SelectJob;
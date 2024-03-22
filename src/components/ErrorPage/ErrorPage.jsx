import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center my-5">
            <h2>Oops !!!!</h2>
            <Link to="/"><button className="btn mt-5">Go Back</button></Link>
        </div>
    );
};

export default ErrorPage;
const Banner = () => {
    return (
        <div>
            <section className="flex min-h-[700px]  w-full items-center justify-center bg-white px-8">
                <div className="flex w-full max-w-6xl gap-10 lg:flex-row flex-col items-center justify-between">
                    <div className="max-w-md md:space-y-6 sm:space-y-5 space-y-4">
                        <h1 className="lg:text-6xl sm:text-4xl text-3xl font-bold leading-tight text-gray-900">One Step Closer To Your <span className="text-[#7E90FE]">Dream Job</span></h1>
                        <p className="lg:text-lg sm:text-base text-sm text-gray-600">
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                        <div className="flex space-x-4">
                            <button className="inline-flex flex-nowrap items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-[#7E90FE] text-white">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <div className="relative">
                        <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" className="relative md:h-[600px]  sm:h-[500px] h-[300px]  w-[500px] bg-gray-400 rounded-b-full object-cover" alt="hero navigate ui" />
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Banner;
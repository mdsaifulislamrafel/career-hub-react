import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return <div className="my-5 space-y-10">
    <Banner></Banner>
    <CategoryList></CategoryList>
    <FeaturedJobs></FeaturedJobs>
  </div>
};

export default Home;

import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../../components/Navbar/index";
import Banner from "../../components/Banner/index";
import CardBody from "../../components/CardBody/index";

const Home = () => {

  return (
    <div>
      <Navbar />
      <Banner />
      <CardBody />
    </div>
  );
};

export default Home;

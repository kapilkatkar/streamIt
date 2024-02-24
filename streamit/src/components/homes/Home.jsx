import { useParams } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
const Home = () => {
  const params = useParams();
  const userId = params.userId;
  return (
    <>
      <Header></Header>
      <div>Home {userId}</div>
    </>
  );
};
export default Home;

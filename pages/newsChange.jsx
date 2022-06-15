import Questions from "../components/Questions";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BasicInformation from "../components/BasicInformation";
const newsChange = () => {
  return (
    <>
        <Navbar/>
        <BasicInformation/>
        <Questions />
        <Footer/>
    </>
  )
}

export default newsChange;
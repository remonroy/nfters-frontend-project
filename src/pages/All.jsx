import Home from "../component/Home/Home";
import Footer from "../component/section/Footer/Footer";
import SectionFive from "../component/section/sectionFive/SectionFive";
import SectionFour from "../component/section/sectionFour/SectionFour";
import SectionOne from "../component/section/sectionOne/SectionOne";
import SectionThree from "../component/section/sectionThree/SectionThree";
import SectionTwo from "../component/section/sectionTwo/SectionTwo";

function All() {
  return (
    <div className="">
      <Home />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />
    </div>
  );
}

export default All;

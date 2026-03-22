import HomeOutdoor from "../components/HomePageComponents/HomeOutdoor";
import Hotoffers from "../components/HomePageComponents/Hotoffers";
import Navbar2 from "../components/HomePageComponents/Navbar2";
import Slider1 from "../components/HomePageComponents/Slider1";
import ConsumerElectronics from "../components/HomePageComponents/ConsumerElectronics";
import RequestQuote from "../components/HomePageComponents/RequestQuote";
import RecommendedItems from "../components/HomePageComponents/RecommendedItems";
import ExtraServices from "../components/HomePageComponents/ExtraServices";
import SuppliersByRegion from "../components/HomePageComponents/SuppliersByRegion";
import Message from "../components/HomePageComponents/Message";

function Home() {
  return (
    <>
      <Navbar2/>
      <Slider1/>
      <Hotoffers/>
      <HomeOutdoor/>
      <ConsumerElectronics/>
      <RequestQuote/>
      <RecommendedItems/>
      <ExtraServices/>
      <SuppliersByRegion/>
      <Message/>
    </>
  );
}

export default Home;
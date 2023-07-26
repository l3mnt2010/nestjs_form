import { Routes } from "react-router-dom";
import HeroSaction from "./HeroSaction";
import AboutApp from "./AboutApp";
import AppFutures from "./AppFutures";
import AppScreensort from "./AppScreensort";
import DowLoadApp from "./DowLoadApp";
import UseApp from "./UseApp";
import OurTeam from "./OurTeam";
import OurRecentBlog from "./OurRecentBlog";
import Footer from "./Footer";
function Home() {
  return (
    <div className="">
      <HeroSaction />
      <AboutApp />
      <AppFutures />
      <AppScreensort />
      <DowLoadApp />
      <UseApp />
      <OurTeam />
      <OurRecentBlog />
      <Footer />
    </div>
  );
}

export default Home;

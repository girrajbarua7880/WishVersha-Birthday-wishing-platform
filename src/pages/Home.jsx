import Hero from "../components/home/Hero";
import EventCategories from "../components/home/EventCategories";
import FeaturedTemplates from "../components/home/FeaturedTemplates";
import HowItWorks from "../components/home/HowitWorks/HowItWorks";

function Home() {
  return (
    <>
      <Hero />

      <EventCategories />

      <FeaturedTemplates />

      <HowItWorks />
    </>
  );
}

export default Home;
import Hero from "./components/Hero";
import HomeCards from "./components/Home-Cards";
import FastFacts from "./components/FastFacts";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import AroundTheCampus from "./components/AroundCampus";
export default function Home() {
  return (
    <>
      <Hero></Hero>
      <HomeCards></HomeCards>
      <FastFacts></FastFacts>
      <AroundTheCampus></AroundTheCampus>
    </>
  );
}

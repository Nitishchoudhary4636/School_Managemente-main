import AcademicsData from "../components/AcademicsData";
import AcademicsHero from "../components/AcademicsHero";
import HomeCards from "../components/Home-Cards";
import Faculty from "../components/Facultys";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
    return (
        <>
            <AcademicsHero></AcademicsHero>
            <AcademicsData></AcademicsData>
            <HomeCards></HomeCards>
            <Faculty></Faculty>
        </>
    );
}

import Banner from "./Banner/Banner";
import MealSection from "./MealSection/MealSection";
import NewsLetter from "./NewsLetter/NewsLetter";
import PricingSection from "./PricingSection/PricingSection";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MealSection></MealSection>
            <PricingSection></PricingSection>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;
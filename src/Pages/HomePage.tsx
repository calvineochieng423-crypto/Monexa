import CTASection from "../Components/CTAsection";
import Featuresection from "../Components/Featuresection";
import Footer from "../Components/Footer";
import Herosection from "../Components/Herosection";
import Lenisscroll from "../Components/Lenisscroll";
import Navigation from "../Components/Navigation";
import SubFeature from "../Components/Subfeaturesection";
import TestimonialSection from "../Components/Testimonial";

export default function HomePage() {
    return (
        <>
            <Lenisscroll />
            <Navigation />
            <Herosection />
            <Featuresection />
            <SubFeature />
            <CTASection />
            <TestimonialSection />
            <Footer />
        </>
    );
}
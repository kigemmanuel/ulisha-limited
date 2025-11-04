import snapp from "../src/snapp.js"
import Products from "./sections/Products.jsx";
import { HeroSection } from "./sections/HeroSection.jsx";
import NavBar from "./sections/NavBar.jsx";
import OurService from "./sections/OurService.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import TeamSection from "./sections/TeamSection.jsx";
import OpenSourceSection from "./sections/OpenSourceSection.jsx";
import Footer from "./sections/Footer.jsx";

const App = () => {
    return <>
        <NavBar />
        <main>
            <HeroSection />
            <Products />
            <OurService />
            <OpenSourceSection />
            <TeamSection />
            <ContactSection />
        </main>
        <Footer />
    </>
}

const SnappBody = document.querySelector("#snapp-body");
snapp.render(SnappBody, App(), "replace")
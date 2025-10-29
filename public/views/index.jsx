import snapp from "../src/snapp.js"
import Products from "./sections/Products.jsx";
import { HeroSection } from "./sections/HeroSection.jsx";
import NavBar from "./sections/NavBar.jsx";
import OurService from "./sections/OurService.jsx";
import ContactSection from "./sections/ContactSection.jsx";

const App = () => {
    return <>
        <NavBar />
        <main>
            <HeroSection />
            <Products />
            <OurService />
            <ContactSection />
        </main>
    </>
}

const SnappBody = document.querySelector("#snapp-body");
snapp.render(SnappBody, App(), "replace")
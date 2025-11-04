import { ServiceCard } from "../components/Card"
import{ SectionTitle } from "../components/Headings"
import Section, { CardHolder } from "../components/Section"

const OurServiceData = [
    {
        image: "/assets/webdev.svg",
        title: "Web Development",
        description: "We craft beautiful, responsive, and functional websites."
    },
    {
        image: "/assets/crypto.svg",
        title: "Blockchain Integration",
        description: "We bring businesses on-chain with secure smart contracts."
    },
    {
        image: "/assets/e_com.svg",
        title: "E-Commerce Solutions",
        description: "Seamless online stores with analytics and fast checkout."
    }
]

const OurService = () => {
    return <Section className="space-y-16 py-14">
        <div class="text-center">
            <p class="text-blue-600 font-semibold text-sm uppercase tracking-wider mb-3">Our Services</p>
            <SectionTitle>
                What We Offer
            </SectionTitle>
            <p class="text-slate-700 max-w-2xl mx-auto text-lg">Comprehensive solutions tailored to bring your digital vision to life</p>
        </div>

        <CardHolder>
            {OurServiceData.map(data => <ServiceCard data={data} />)}
        </CardHolder>
    </Section>
}

export default OurService
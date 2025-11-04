import Section, { CardHolder } from "../components/Section"
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"
import { Fontawesome as Icon } from "snapp-icons"
import { ProductCard } from "../components/Card"
import { faShop, faBriefcase, faMicrochip } from "@fortawesome/free-solid-svg-icons"
import { SectionTitle } from "../components/Headings"

const productData = [
    {
        icon: faShop,
        title: "Ulisha Store",
        description: "A fast-growing e-commerce platform sourcing affordable products directly from manufacturers."
    },
    {
        icon: faBriefcase,
        title: "Ushops",
        description: "An SME enablement platform helping businesses get online with ease and grow digitally."
    },
    {
        icon: faMicrochip,
        title: "Ulisha Technologies",
        description: "Our innovation lab building websites, apps, and automation systems for modern enterprises."
    }
]

const AboutUs = () => {
    return <Section className="space-y-16 pt-6">
        <div className="text-center space-y-6 text-slate-800">
            <SectionTitle>
                About Ulisha Limited
            </SectionTitle>
            <p className="text-sm lg:text-md xl:text-lg font-semibold leading-relaxed text-slate-900 mx-auto lg:max-w-[70%]">
              <Icon icon={faQuoteLeft} className="inline align-top h-3 mr-1" />
              We build the digital backbone for market efficiency, connecting households to cost-effective products and empowering local businesses with proprietary tech.
              <Icon icon={faQuoteRight} className="inline align-top h-3 ml-1" />
            </p>
        </div>
        <CardHolder>
           {productData.map(data => <ProductCard data={data} />)}
        </CardHolder>
    </Section>
}

export default AboutUs
import BubbleText from "../components/BubbleText"
import { ButtonOutline, Button } from "../components/Button"
import ServicesCarousel from "../components/ServicesCarousel"
import Section from "../components/Section"
import { faQuoteLeft, faQuoteRight, faStore, faBriefcase, faCode } from "@fortawesome/free-solid-svg-icons"
import { Fontawesome as Icon } from "snapp-icons"

const HeroSection = () => {

  const BubbletextData = [
    {
      title: "Retail & Sourcing",
      description: "Direct-to-consumer cost efficiency.",
      bgColor: "bg-blue-200",
      textColor: "text-blue-600",
      icon: faStore
    },
    {
      title: "SME Enablement",
      description: "Digital presence with Ushops.",
      bgColor: "bg-orange-200",
      textColor: "text-orange-600",
      icon: faBriefcase
    },
    {
      title: "Bespoke Software",
      description: "APIs and custom tech solutions.",
      bgColor: "bg-indigo-200",
      textColor: "text-indigo-700",
      icon: faCode
    }
  ]

    return <Section className="flex flex-col align-middle py-6 mt-14 lg:mt-20">
      <div className="flex flex-col my-auto gap-y-4 xl:gap-6">
        
        {/* Main Hero Section */}
        <div className="flex flex-col lg:flex-row gap-y-10 justify-between text-slate-800 mx-auto">
          <div className="flex flex-col gap-y-8 flex-[2] my-auto">
            <h1 className="font-bold text-5xl lg:text-6xl">The Engine For <br /> Nigerian <br /> Commerce</h1>
            <p className="text-lg lg:text-xl leading-relaxed max-w-[92%] lg:max-w-[90%] xl:max-w-[85%] ">
              <Icon icon={faQuoteLeft} className="inline align-top h-4 ml-1" />
              We build the digital backbone for market efficiency, connecting households to cost-effective products and empowering local businesses with proprietary tech
              <Icon icon={faQuoteRight} className="inline align-top h-4 ml-1" />
            </p>

            {/* Button */}
            <div className="flex gap-x-4">
              <ButtonOutline>Our Products</ButtonOutline>
              <Button>Contact Us</Button>
            </div>
          </div>

          {/* Bubble text */}
          <div className="flex flex-col flex-[1] gap-y-5 my-auto items-center md:items-start lg:items-end">
            {BubbletextData.map(data => <BubbleText data={data} />)}
          </div>
        </div>

        {/* Marquee */}
        <div>
        <ServicesCarousel 
          Services={[
            "NextJS", "React", "VS Code", "Linux", "Zed", "TypeScript", "JavaScript", "PHP", "Laravel", "Docker", "PM2", "Vercel", 
            "Netlify", "AWS", "Google Cloud", "Microsoft Azure", "Digital Ocean", "Hostinger", "Namecheap", "Namehero"
          ]} />
        </div>
      </div>
    </Section>
}

export {
    HeroSection
}
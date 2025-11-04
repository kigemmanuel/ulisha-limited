import { faCode, faCheck, faShield, faGifts, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { Fontawesome as Icon } from "snapp-icons"
import Section from "../components/Section"
import GithubLink from "../components/GithubLink"
import LicenseRules from "../components/LicenseRules"
import WhyThisApproach from "../components/WhyThisApproach"
import { SectionTitle } from "../components/Headings"

const OpenSourceSection = () => {
    return <Section>
      <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6">
            <Icon icon={faCode} className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-600">Open Source Approach</span>
          </div>

          <SectionTitle>
            Open Source, Transparent, and Accessible
          </SectionTitle>
          <p className="text-xl text-center text-gray-600">
            Building trust through complete transparency in everything we do.
          </p>
      </div>

      <div className="space-y-8">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-10 border border-blue-100">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Icon icon={faShield} className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
              We believe in openness and trust.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Our commitment to transparency means you can verify everything yourself. No secrets, no surprises.
            </p>

            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Icon icon={faCheck} className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">100% Source Visibility</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Icon icon={faCheck} className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Security Auditable</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                  <Icon icon={faCheck} className="w-3 h-3 text-white" />
                </div>
                <span className="text-sm font-medium text-gray-700">Community Driven</span>
              </div>
            </div>
            <a 
              href="https://github.com/ulisha-limited" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors group"
            >
              <Icon icon={faGifts} className="w-5 h-5" />
              <span>View on GitHub</span>
              <Icon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
        </div>

        <LicenseRules />
        <GithubLink />
        <WhyThisApproach />
          
        </div>
    </Section>
}


export default OpenSourceSection
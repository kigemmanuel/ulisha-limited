import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { Fontawesome as Icon } from "snapp-icons"
import Section from "../components/Section"
import { SectionTitle } from "../components/Headings"
import ContactInfo from "../components/ContactInfo"

const ContactSection = () => {
    return <Section className="bg-slate-50 space-y-16 pt-14 pb-20">
        <div className="text-center mb-10">
            <SectionTitle>
                Contact Us
            </SectionTitle>
            <p className="text-slate-600">We'd love to hear from you. Send us a message!</p>
        </div>

        <div className="mx-auto space-y-5 md:space-y-10">

            {/* Contact Info */}
            <ContactInfo />

            {/* Main Form Card */}
            <div className="bg-white px-4 py-10 lg:px-12 lg:py-12 rounded-2xl shadow-lg max-w-2xl 2xl:max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Send us a message</h3>
                <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>
                
                <form id="contactForm" className="space-y-5">
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your Name"
                            required
                            className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400"
                        />
                    </div>
                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter a valid email address"
                            required
                            className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400"
                        />
                    </div>
                    <div className="relative">
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Enter your message"
                            rows="5"
                            required
                            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none placeholder:text-slate-400"
                        ></textarea>
                    </div>
                    <button 
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wide"
                    >
                        Send Message
                    </button>
                    <p className="text-xs text-center text-slate-500 mt-4">
                        This site is protected by reCAPTCHA and the Google 
                        <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline"> Privacy Policy</a> and 
                        <a href="https://policies.google.com/terms" className="text-blue-600 hover:underline"> Terms of Service</a> apply.
                    </p>
                </form>
            </div>

            {/* Location Info - Bottom */}
            <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-3 text-slate-600">
                    <Icon icon={faLocationDot} className="w-5 h-5 text-blue-600" />
                    <p>Delta, Nigeria</p>
                </div>
            </div>
        </div>
    </Section>
}

export default ContactSection
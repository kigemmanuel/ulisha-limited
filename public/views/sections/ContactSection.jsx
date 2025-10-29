import { faClock, faLocationPin, faPhone } from "@fortawesome/free-solid-svg-icons"
import Section from "../components/Section"
import { Fontawesome as Icon } from "snapp-icons"

const ContactSection = () => {
    return (
        <Section className="bg-linear-to-b from-slate-50 to-slate-100 py-16">
            <div className="container mx-auto max-w-6xl px-4">
                <div className="text-center mb-12">
                    <h2 className="font-bold text-3xl md:text-4xl text-slate-900 mb-3">Contact Us</h2>
                    <p className="text-slate-600">We'd love to hear from you. Send us a message!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-2">
                                <Icon icon={faPhone} className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900">Call Us</h3>
                            <p className="text-slate-600">1 (234) 567-891<br />1 (234) 987-654</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-2">
                                <Icon icon={faLocationPin} className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900">Location</h3>
                            <p className="text-slate-600">121 Rock Street, 21 Avenue,<br />New York, NY 92103-9000</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                        <div className="flex flex-col items-center text-center space-y-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-2">
                                <Icon icon={faClock} className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-900">Business Hours</h3>
                            <p className="text-slate-600">Mon – Fri …… 10 am – 8 pm<br />Sat, Sun ....… Closed</p>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 md:p-8">
                        <form id="contactForm" className="w-full max-w-[92%] lg:max-w-[85%] mx-auto space-y-6">
                            <div className="relative">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Enter your Name"
                                    required
                                    className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400"
                                    />
                            </div>
                            <div className="relative">
                                    <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Enter a valid email address"
                                    required
                                        className="w-full px-4 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400"
                                />
                            </div>
                            <div className="relative">
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Enter your message"
                                    rows="6"
                                    required
                                        className="w-full px-4 py-4 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none placeholder:text-slate-400"
                                ></textarea>
                            </div>
                            <button 
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
                            >
                                Send Message
                            </button>
                            <p className="text-xs text-center text-slate-500 mt-4">
                                This site is protected by reCAPTCHA and the Google{' '}
                                <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline">Privacy Policy</a> and{' '}
                                <a href="https://policies.google.com/terms" className="text-blue-600 hover:underline">Terms of Service</a> apply.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default ContactSection
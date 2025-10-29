import { faAlarmClock, faClock, faLocation, faLocationPin, faPhone, faTimes, faTimesCircle } from "@fortawesome/free-solid-svg-icons"
import Section from "../components/Section"
import { Fontawesome as Icon } from "snapp-icons"

const ContactSection = () => {
    return <Section className="bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700 space-y-16 pt-14">
        <div className="flex flex-col md:flex-row-reverse">
            <div class="bg-white px-6 py-10 md:py-12 md:w-1/2 rounded-t-2xl md:rounded-l-none md:rounded-r-2xl">
                <div class="text-center mb-10">
                    <h2 class="font-bold text-3xl md:text-4xl text-slate-900 mb-2">CONTACT US</h2>
                    <p class="text-slate-600">We'd love to hear from you. Send us a message!</p>
                </div>
                <form id="contactForm" class="space-y-5">
                    <div class="relative">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Enter your Name"
                            required
                            class="w-full px-5 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400"
                        />
                    </div>
                    <div class="relative">
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter a valid email address"
                            required
                            class="w-full px-5 py-3 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 placeholder:text-slate-400"
                        />
                    </div>
                    <div class="relative">
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Enter your message"
                            rows="6"
                            required
                            class="w-full px-5 py-4 bg-white border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 resize-none placeholder:text-slate-400"
                        ></textarea>
                    </div>
                    <button 
                        type="submit"
                        class="w-full bg-gradient-to-r bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 uppercase tracking-wide"
                    >
                        Submit
                    </button>
                    <p class="text-xs text-center text-slate-500 mt-4">
                        This site is protected by reCAPTCHA and the Google 
                        <a href="https://policies.google.com/privacy" class="text-indigo-600 hover:underline">Privacy Policy</a> and 
                        <a href="https://policies.google.com/terms" class="text-indigo-600 hover:underline">Terms of Service</a> apply.
                    </p>
                </form>
            </div>
            <div className="bg-slate-100 flex flex-col justify-center items-center py-10 px-4 md:w-1/2 space-y-8 rounded-b-2xl md:rounded-r-none md:rounded-l-2xl">
                <div className="space-y-8 md:space-y-10">
                    <div class="flex flex-row gap-x-5 items-start">
                        <div class="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <Icon icon={faPhone} className="w-5 h-5 text-blue-600" />
                        </div>
                        <div class="space-y-2">
                            <h2 class="text-xl font-semibold text-slate-900">Call Us</h2>
                            <p class="text-slate-600 leading-relaxed">1 (234) 567-891<br />1 (234) 987-654</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-x-5 items-start">
                        <div class="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <Icon icon={faLocationPin} className="w-5 h-5 text-blue-600" />
                        </div>
                        <div class="space-y-2">
                            <h2 class="text-xl font-semibold text-slate-900">Location</h2>
                            <p class="text-slate-600 leading-relaxed">121 Rock Street, 21 Avenue,<br />New York, NY 92103-9000</p>
                        </div>
                    </div>
                    <div class="flex flex-row gap-x-5 items-start">
                        <div class="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <Icon icon={faClock} className="w-5 h-5 text-blue-600" />
                        </div>
                        <div class="space-y-2">
                            <h2 class="text-xl font-semibold text-slate-900">Business Hours</h2>
                            <p class="text-slate-600 leading-relaxed">Mon – Fri …… 10 am – 8 pm<br />Sat, Sun ....… Closed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Section>
}

export default ContactSection
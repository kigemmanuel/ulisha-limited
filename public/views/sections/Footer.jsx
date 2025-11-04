import { Fontawesome as Icon } from "snapp-icons";
import Section from "../components/Section"
import { faFacebookF, faInstagram, faTiktok, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faClock, faEnvelope, faLocation, faLocationDot, faPhone, faStar } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-gray-300 py-12">
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold">
                            <span className="text-blue-600">Ulisha</span>
                            <span className="text-white">Limited</span>
                        </h2>
                        <p className="text-sm leading-relaxed">
                            We build the digital backbone for market efficiency, connecting households to cost-effective products and empowering local businesses with proprietary tech
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex gap-4 pt-2">
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition">
                                <Icon icon={faFacebookF} className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition">
                                <Icon icon={faInstagram} className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition">
                                <Icon icon={faTwitter} className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition">
                                <Icon icon={faTiktok} className="w-5 h-5" />
                            </a>
                        </div>
                        {/* Trustpilot */}
                        <a href="#" className="inline-block mt-4 bg-white px-4 py-2 rounded text-sm font-medium text-slate-900 hover:bg-gray-100 transition">
                            <div className="flex items-center gap-2">
                                <Icon icon={faStar} className="w-4 h-4 text-green-600" />
                                <span>Review us on</span>
                                <span className="font-bold">Trustpilot</span>
                            </div>
                        </a>
                    </div>
 
                    <div className="col-span-2 space-y-4 md:flex md:justify-evenly">
                        {/* Links Section */}
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-blue-600 transition">Home</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition">About Us</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition">Sitemap</a></li>
                            </ul>
                        </div>

                        {/* Legal Section */}
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">Legal</h3>
                            <ul className="space-y-3">
                                <li><a href="#" className="hover:text-blue-600 transition">Terms</a></li>
                                <li><a href="#" className="hover:text-blue-600 transition">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Contact Info Section */}
                    <div>
                        <h3 className="text-white text-lg font-semibold mb-4">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <Icon icon={faLocationDot} className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span>Delta, Nigeria</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Icon icon={faPhone} className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span>+234 913 478 1219</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Icon icon={faEnvelope} className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span>support@ulishastore.com</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Icon icon={faClock} className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                <span>Mon-Sat: 8AM - 6PM</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Ulisha Limited. All rights reserved.</p>
                </div>
            </Section>
        </footer>
    );
};

export default Footer;
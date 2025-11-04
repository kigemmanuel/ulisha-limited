import { faClock, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { Fontawesome as Icon } from "snapp-icons"

const ContactInfo = () => {
    return  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="tel:1234567891" className="flex items-center gap-4 p-5 bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon icon={faPhone} className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500">Call Us</p>
                        <p className="text-slate-200 font-semibold">+234 913 478 1219</p>
                    </div>
                </a>
                
                <a href="mailto:hello@company.com" className="flex items-center gap-4 p-5 bg-gray-700 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon icon={faEnvelope} className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500">Email Us</p>
                        <p className="text-slate-200 font-semibold">support@ulislimited.com</p>
                    </div>
                </a>
                
                <div className="flex items-center gap-4 p-5 bg-gray-700 rounded-xl shadow-sm border border-slate-100">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon icon={faClock} className="w-5 h-5 text-white" />
                    </div>
                    <div>
                        <p className="text-sm font-medium text-slate-500">Hours</p>
                        <p className="text-slate-200 font-semibold">Mon-Sat: 8AM - 6PM</p>
                    </div>
                </div>
            </div>
}


export default ContactInfo

import snapp from "../../src/snapp.js"
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import Section from '../components/Section'
import { Fontawesome as Icon } from 'snapp-icons';

const NavBar = () => {
    const isMenuOpen = snapp.dynamic(false)

    const NavLink = [
        {title: "Home", link: "#"},
        {title: "About Us", link: "#"},
        {title: "Ulisha Store", link: "#"},
    ]

    return (
        <header className="bg-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 shadow-xs">
            <Section className="py-3 md:py-6">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="text-2xl font-bold">
                            <span className="text-blue-600">Ulisha</span>
                            <span>Limited</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden text-slate-900 md:flex items-center space-x-8 ">
                        {NavLink.map(link => <a href={link.link} target="_blank" className="font-medium hover:text-blue-600 transition-colors relative group">
                            {link.title}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                        </a>)}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center space-x-4">
                        <button className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-all duration-300 shadow-xs shadow-black/50">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-slate-900 p-2"
                        onClick={() => isMenuOpen.update(!isMenuOpen.value)}
                    >
                    <Icon icon={faBars} className={() => "w-6 h-6 " + (isMenuOpen.value ? "hidden" : "block")} />
                    <Icon icon={faXmark} className={() => "w-6 h-6 " + (isMenuOpen.value ? "block" : "hidden")} />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div 
                    id="mobileMenu" 
                    className={() => 
                        "md:hidden overflow-hidden transition-all duration-300 "
                        + (!isMenuOpen.value && " max-h-0 opacity-0") // Menu Open
                        + (isMenuOpen.value && " max-h-96 opacity-100") // Menu Close
                    }
                >
                    <nav className="py-4 space-y-4">
                        {NavLink.map(link => <a href={link.link} className="block text-slate-900 font-medium py-2 px-4 hover:bg-slate-300 rounded-lg transition-colors">
                                {link.title}
                            </a>)
                        }
                        <button className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-colors">
                            Get Started
                        </button>
                    </nav>
                </div>
            </Section>
        </header>
    );
};

export default NavBar;
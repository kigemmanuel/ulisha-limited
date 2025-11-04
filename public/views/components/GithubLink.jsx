import { Fontawesome as Icon } from "snapp-icons"
import { faArrowRight} from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const GithubLink = () => {
    return  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 text-white">
              <div className="flex items-start justify-between gap-6 flex-wrap">
                <div>
                  <h5 className="text-lg font-bold mb-2">Explore Our Repositories</h5>
                  <p className="text-gray-400 mb-4">
                    Dive into our code and see our commitment to transparency firsthand.
                  </p>
                  <a 
                    href="https://github.com/ulisha-limited" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-mono text-sm group"
                  >
                    <span>github.com/ulisha-limited</span>
                    <Icon icon={faArrowRight} className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>
                <Icon icon={faGithub} className="w-16 h-16 text-gray-700" />
              </div>
          </div>
}

export default GithubLink
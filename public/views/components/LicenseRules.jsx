import { faCode, faShield } from "@fortawesome/free-solid-svg-icons"
import { Fontawesome as Icon } from "snapp-icons"

const LicenseRules = () => {
    return (<>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-blue-200 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <Icon icon={faCode} className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Open Source Software
                  </h4>
                  <div className="w-12 h-0.5 bg-blue-600"></div>
                </div>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Our software is <span className=" text-gray-900">open source</span>, meaning anyone can review, build, and test the code. No free trials, no locked demos.
                </p>
                <p>
                  You can see exactly how it works, anytime. Every function, every algorithm, every line of code is available for inspection.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 hover:border-purple-200 hover:shadow-lg transition-all">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                  <Icon icon={faShield} className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Licensed for Production
                  </h4>
                  <div className="w-12 h-0.5 bg-purple-600"></div>
                </div>
              </div>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  While the source code is public, the software itself is licensed. <span className="text-gray-900">A valid license is required for production or commercial use.</span>
                </p>
                <p>
                  This approach ensures transparency for developers and businesses while supporting sustainable development.
                </p>
              </div>
            </div>
        </div>
    </>)
}

export default LicenseRules
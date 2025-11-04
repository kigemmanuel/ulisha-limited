
const WhyThisApproach = () => {
    return  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 border border-gray-200">
            <h5 className="text-lg font-bold text-gray-900 mb-4">
              Why This Approach Works
            </h5>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h6 className="font-semibold text-gray-900 mb-2">For Developers</h6>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Review code before adoption</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Test locally without restrictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Contribute to improvements</span>
                  </li>
                </ul>
              </div>
              <div>
                <h6 className="font-semibold text-gray-900 mb-2">For Businesses</h6>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Security team audits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>No vendor lock-in concerns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Sustainable long-term support</span>
                  </li>
                </ul>
              </div>
            </div>
        </div>
}

export default WhyThisApproach
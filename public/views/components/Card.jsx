import { Fontawesome as Icon } from "snapp-icons"

const ProductCard = ({data}) => {
  return <article className="group relative bg-white rounded-3xl p-8 py-14 flex flex-col gap-y-6 text-center transition-all duration-500 shadow-2xl overflow-hidden">
    {/* Background Gradient on Hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 opacity-100duration-500"></div>
    
    {/* Decorative Blurred Shapes */}
    <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-30 transition-opacity"></div>
    <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-tr from-purple-400 to-pink-500 rounded-full blur-3xl opacity-30 transition-opacity"></div>
    
    {/* Icon Container */}
    <div className="relative mx-auto bg-gradient-to-br from-blue-500 to-purple-600 p-6 rounded-3xl shadow-lg drop-shadow-2xl">
      <div className="absolute inset-0 bg-gradient-to-tl from-purple-600 to-pink-600 rounded-3xl opacity-0"></div>
      <Icon icon={data.icon} className="relative w-8 h-8 text-white drop-shadow-lg" />
    </div>
    
    <h2 className="relative text-2xl lg:text-3xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
      {data.title}
    </h2>
    <p className="relative text-base text-gray-600 leading-relaxed">{data.description}</p>
  </article>
}

const ServiceCard = ({ data }) => {
  return (
    <article className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
      {/* Image Section with Gradient Overlay */}
      <div className="relative overflow-hidden h-44">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 group-hover:opacity-20 transition-opacity"></div>
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 h-full flex items-center justify-center p-6">
          <img
            src={data.image} 
            alt={data.title}
            className="w-auto h-32 object-contain transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col flex-grow p-6 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">
          {data.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-base">
          {data.description}
        </p>
        
        {/* Features/Stats Grid */}
        {data.features && (
          <div className="grid grid-cols-3 gap-3 pt-4 border-t border-gray-100">
            {data.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-blue-600 font-bold text-lg">{feature.value}</div>
                <div className="text-gray-500 text-xs">{feature.label}</div>
              </div>
            ))}
          </div>
        )}
        
        {/* Action Button */}
        {/* <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500 hover:shadow-lg">
          Get Started
        </button> */}

        <div className="h-10"></div>
      </div>
    </article>
  );
};

export {
  ProductCard,
  ServiceCard
}

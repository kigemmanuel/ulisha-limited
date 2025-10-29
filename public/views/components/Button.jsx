

const ButtonOutline = ({ children }) => {
  return (
    <button className="px-4 py-2 xl:py-3 xl:px-6 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300">
      {children}
    </button>
  );
};

const Button = ({ children }) => {
  return (
    <button className="px-4 py-3 xl:py-3 xl:px-8 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-400 transition-colors duration-300">
      {children}
    </button>
  );
};


export {
    ButtonOutline,
    Button
}
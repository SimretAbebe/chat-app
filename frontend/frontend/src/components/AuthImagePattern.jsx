const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-gray-900 p-12">
      <div className="max-w-md text-center text-white">
        <div className="grid grid-cols-5 gap-6 mb-10">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className={`
                w-10 h-10 rounded-full
                bg-gradient-to-br from-gray-700 to-gray-900
                shadow-lg
                transform
                transition-transform duration-700 ease-in-out
                hover:scale-110
                ${i % 4 === 0 ? "animate-pulse" : ""}
              `}
            />
          ))}
        </div>
        <h2 className="text-4xl font-extrabold mb-4">{title}</h2>
        <p className="text-gray-400 text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;

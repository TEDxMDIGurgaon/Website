const AlumniSection = ({ year, members }) => {
  return (
    <div className="mb-12">
      {/* Year Heading */}
      <h2 className="text-2xl font-bold text-center text-red-500 mb-6">
        {year}
      </h2>

      {/* Alumni Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {members.map((name, index) => (
          <div
            key={index}
            className="bg-neutral-900 text-white px-4 py-3 rounded-lg text-center shadow-md  transition-transform"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlumniSection;

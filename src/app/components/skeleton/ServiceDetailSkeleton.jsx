const ServiceDetailSkeleton = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 animate-pulse">
      {/* Title */}
      <div className="h-10 bg-gray-300 rounded w-2/3 mx-auto"></div>

      {/* Image */}
      <div className="w-full h-80 bg-gray-300 rounded shadow-lg"></div>

      {/* Description lines */}
      <div className="space-y-3">
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6"></div>
        <div className="h-4 bg-gray-300 rounded w-4/6"></div>
      </div>

      {/* Service Charge */}
      <div className="h-5 bg-gray-300 rounded w-1/4"></div>

      {/* Book Button */}
      <div className="w-full flex justify-center">
        <div className="h-10 bg-primary rounded-lg w-1/3"></div>
      </div>
    </div>
  );
};
export default ServiceDetailSkeleton;

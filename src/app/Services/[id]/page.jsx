import { getSingleService } from "@/src/actions/server/Service";
import Image from "next/image";
import Link from "next/link";

const ServiceDetail = async ({ params }) => {
  const { id } = await params;
  const service = await getSingleService(id);

  if (!service?._id) {
    return (
      <div className="max-w-xl mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold mb-4">Service not found</h2>
        <Link
          href="/"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-teal-600"
        >
          Go Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-2 md:p-6 space-y-6">
      <h1 className="text-3xl font-bold text-neutral text-center">
        {service.name}
      </h1>

      <div className="relative w-full h-80 rounded overflow-hidden shadow-lg">
        <Image
          src={service.image}
          alt={service.name}
          fill
          className="object-cover"
        />
      </div>

      <p className="text-base-content text-lg">{service.descriptionFull}</p>

      <p className="mt-2 font-semibold text-neutral">
        Service Charge: ${service.serviceCharge}
      </p>

      <div className="flex justify-center">
        <button className="bg-primary text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-teal-600 transition">
          Book Service
        </button>
      </div>

      <div className="text-center">
        <Link href="/" className="text-primary underline hover:text-teal-600">
          Back to Home
        </Link>
      </div>
    </div>
  );
};
export default ServiceDetail;

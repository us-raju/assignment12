import React from "react";

// import { servicesData } from "../../data/ServiceData";
import Image from "next/image";
import { getService } from "@/src/actions/server/Service";
import Link from "next/link";
const services = await getService();

const ServiceCard = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl text-neutral font-bold mb-12 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6  flex flex-col ">
                <h3 className="text-xl text-neutral font-semibold mb-2">
                  {service.name}
                </h3>
                <p className="text-base-content mb-4 truncate">
                  {service.description}
                </p>
                <div className="flex justify-between items-center">
                  <button className="bg-primary text-white text-[14px] md:text-[16px] px-2 md:px-4 py-2 rounded-lg  cursor-pointer hover:bg-teal-600 ">
                    Book Service
                  </button>
                  <Link
                    href={`/Services/${service._id.toString()}`}
                    className="bg-primary text-white text-[14px] md:text-[16px] px-2 md:px-4 py-2 rounded-lg  cursor-pointer hover:bg-teal-600 "
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServiceCard;

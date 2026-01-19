// components/Testimonials.jsx
import Image from "next/image";
import React from "react";
import testi1 from '../../../../public/Testimonial1.jpg'
import testi2 from '../../../../public/Testimonial2.jpg'
import testi3 from '../../../../public/Testimonial3.jpg'

const testimonials = [
  {
    id: 1,
    name: "Rina Akter",
    message:
      "Care.xyz's babysitting service is amazing! My child feels safe and happy all the time.",
    avatar: testi1,
  },
  {
    id: 2,
    name: "Shahriar Rahman",
    message:
      "The elderly care service is truly trustworthy. My grandfather is very satisfied.",
    avatar: testi2,
  },
  {
    id: 3,
    name: "Fatema Begum",
    message:
      "Booking a service is simple and convenient. The cost transparency and timing are excellent.",
    avatar: testi3,
  },
];

const Testimonial = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-neutral mb-8">Testimonial</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-base-100 shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300"
            >
              <Image
                src={testimonial.avatar}
                alt={testimonial.name}
                width={80}  
                height={80} 
                className="rounded-full object-cover mb-4"
                priority
              />
              <p className="text-base-content mb-4">
                &quot;{testimonial.message}&quot;
              </p>
              <h3 className="font-semibold text-neutral text-lg">{testimonial.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;

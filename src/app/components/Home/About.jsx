import Image from "next/image";

const About = () => {
  return (
    <section className="py-16 bg-netural">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row  gap-10 items-center">

        <div className="md:w-[50%] w-full h-75 md:h-100">
          <h2 className="text-3xl md:text-4xl font-bold text-base-content mb-4">
            About{" "}
            <span className="text-primary">
              Care.xyz
            </span>
          </h2>

      
  <p className="text-base-content mb-4 leading-relaxed">
    Care.xyz is a trusted caregiving platform dedicated to supporting
    families with professional, reliable, and compassionate care services. 
    From babysitting to elderly care and specialized home assistance, we ensure 
    that your loved ones receive the attention they deserve.
  </p>

  <p className="text-secondary mb-4 leading-relaxed">
    Our mission is to make caregiving easy, secure, and accessible for everyone. 
    We carefully verify and train all our caregivers to provide trustworthy 
    and personalized support, giving families peace of mind.
  </p>

  <p className="text-base-content mb-6 leading-relaxed">
    We embrace modern technology to streamline scheduling, payments, and communication, 
    so that quality care is just a few clicks away.
  </p>

  <div className="flex items-center gap-4">
    <span className="font-medium text-secondary">
      Trusted by 5,000+ families
    </span>
  </div>
        </div>


        <div className="relative md:w-[50%] w-full h-75 md:h-100">
          <Image
            src="/about.png"
            fill
            // height={400}
            alt="Care Service"
            className="rounded-2xl shadow-lg bg-base-100"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

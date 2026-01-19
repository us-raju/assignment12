import Banner from "./components/Home/Banner";
import About from "./components/Home/About";
import ServiceCard from "./components/Home/ServiceCard";
import Testimonial from "./components/Home/Testimonial";

export const metadata = {
  title: "Home"
};
export default async function Home() {
  return (
    <>
      <section className="space-y-10">
        <Banner></Banner>
      </section>
      <section className="space-y-10">
        <About></About>
      </section>
      <section className="space-y-10">
        <ServiceCard></ServiceCard>
      </section>
      <section className="space-y-10">
        <Testimonial></Testimonial>
      </section>
    </>
  );
}

import Service from './Service';
import Title from './Title';
import { services } from "../data";


const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title="our" subTitle="services" />
       <div className="section-center services-center">
        {services.map((service) => (
          <Service key={service.id } service={service} />
           ))}
      </div>
    </section>
  );
};

export default Services;

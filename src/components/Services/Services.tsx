import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt, FaChartLine } from "react-icons/fa";
import "../Styles/Services.css";

const services = [
  {
    title: "Web Development",
    description: "Building modern, responsive, and scalable web applications.",
    icon: <FaCode className="service-icon" />,
  },
  {
    title: "UX Design",
    description:
      "Creating intuitive and user-friendly designs for better experiences.",
    icon: <FaPaintBrush className="service-icon" />,
  },
  {
    title: "Mobile App Development",
    description: "Developing high-quality mobile apps for iOS and Android.",
    icon: <FaMobileAlt className="service-icon" />,
  },
  {
    title: "SEO & Digital Marketing",
    description: "Optimizing websites for search engines and digital growth.",
    icon: <FaChartLine className="service-icon" />,
  },
];

const ServicesPage: React.FC = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-subtitle">
        We provide top-notch solutions to help your business grow.
      </p>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            {service.icon}
            <h2 className="service-title">{service.title}</h2>
            <p className="service-description">{service.description}</p>
            <button className="service-btn">Learn More</button>
          </div>
        ))}
      </div>
      <div className="testimonials-section">
        <h2 className="testimonials-title">What Our Clients Say</h2>
        <p className="testimonial">
          "This team delivered an amazing website! Highly recommend their
          services." - John Doe
        </p>
        <p className="testimonial">
          "The UX design was outstanding and helped improve our conversions." -
          Jane Smith
        </p>
      </div>
    </div>
  );
};

export default ServicesPage;

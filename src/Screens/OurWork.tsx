import React from "react";
import { motion } from "framer-motion";
import "../components/Styles/OurWork.css";

const projects = [
  {
    title: "Restaurant Ordering System",
    description: "A seamless online food ordering system with payments.",
    link: "https://restaurant.example.com",
    image: "https://via.placeholder.com/300x200?text=Restaurant+Ordering",
  },
  {
    title: "Product Management System",
    description:
      "A CLI-based product management tool with full CRUD operations.",
    link: "https://productms.example.com",
    image: "https://via.placeholder.com/300x200?text=Product+Management",
  },
  {
    title: "Library Management System",
    description: "A system to manage book inventory and availability.",
    link: "https://libraryms.example.com",
    image: "https://via.placeholder.com/300x200?text=Library+Management",
  },
  {
    title: "Selenium Test Automation Suite",
    description:
      "Comprehensive Selenium test suite with POM and cross-browser testing.",
    link: "https://seleniumtests.example.com",
    image: "https://via.placeholder.com/300x200?text=Selenium+Testing",
  },
];

const OurWork: React.FC = () => {
  return (
    <div className="our-work-container">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          className="our-work-card"
        >
          <div className="custom-card">
            <img
              src={project.image}
              alt={project.title}
              className="custom-card-image"
            />
            <div className="custom-card-content">
              <h2 className="custom-card-title">{project.title}</h2>
              <p className="custom-card-description">{project.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default OurWork;

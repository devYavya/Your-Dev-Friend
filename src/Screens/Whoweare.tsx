import React from "react";
import "../components/Styles/Whoweare.css";

const WhoWeAre: React.FC = () => {
  return (
    <section className="who-we-are">
      <div className="who-container">
        <h2 className="section-title">Who We Are</h2>
        <p className="section-subtitle">
          A team of passionate developers and designers dedicated to your
          digital success
        </p>

        <div className="values-container">
          <div className="value-card">
            <div className="who-icon-container">
              <svg
                className="who-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15L8.5 9H15.5L12 15Z"
                  stroke="#4263EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z"
                  stroke="#4263EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7 21H17"
                  stroke="#4263EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 17V21"
                  stroke="#4263EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 17V21"
                  stroke="#4263EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="value-title">Excellence</h3>
            <p className="value-description">
              Committed to delivering the highest quality solutions that exceed
              expectations.
            </p>
          </div>

          <div className="value-card">
            <div className="who-icon-container">
              <svg
                className="who-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#4263EB"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="5"
                  stroke="#4263EB"
                  strokeWidth="2"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="1"
                  stroke="#4263EB"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3 className="value-title">Results-Driven</h3>
            <p className="value-description">
              Focused on achieving measurable outcomes that drive your business
              forward.
            </p>
          </div>

          <div className="value-card">
            <div className="who-icon-container">
              <svg
                className="who-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21"
                  stroke="#8A3FFC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z"
                  stroke="#8A3FFC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 21V19C22.9986 17.1771 21.7011 15.5857 19.9355 15.1367"
                  stroke="#8A3FFC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 3.13672C17.7699 3.58443 19.0719 5.17831 19.0719 7.00502C19.0719 8.83173 17.7699 10.4256 16 10.8733"
                  stroke="#8A3FFC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <h3 className="value-title">Client-Focused</h3>
            <p className="value-description">
              Your success is our priority. We work closely with you every step
              of the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

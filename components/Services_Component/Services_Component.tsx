import React from "react";
import Service_Card from "../Service_Card/Service_Card";

const Services_Component = () => {
  return (
    <section data-label="Full Component" className="w-full py-5 flex flex-col gap-5">
      <div data-label="Heading" className="w-full flex flex-col justify-center items-center">
        <h1 className="text-heading">Our Services</h1>
        <p className="text-body">
          Discover our range of professional services tailored to meet your
          unique requirements.
        </p>
      </div>
      <div data-label="Row 1" className="w-full flex flex-col lg:flex-row justify-center gap-5 lg:p-5">
        <Service_Card
          photo="/assets/Images/quality.jpg"
          link="/about_us"
          title="Quality Management Services"
          description={
            <ul className="services_description">
              <li>Vendor Audits</li>
              <li>Mock FDA/TGA/EMA Audits</li>
              <li>Internal Audits</li>
              <li>Risk Management</li>
              <li>FDA Warning Letter (WL) Remediation</li>
            </ul>
          }
        />
        <Service_Card
          photo="/assets/Images/cmc_advisory.jpg"
          link="/about_us"
          title="CMC Advisory"
          description={
            <ul className="services_description">
              <li>Method Development</li>
              <li>Drug Substance Development</li>
              <li>Drug Product Development</li>
              <li>Stability Planning and Program Management</li>
              <li>CMC Project Management</li>
            </ul>
          }
        />
        <Service_Card
          photo="/assets/Images/cmc_regulatory.jpg"
          link="/about_us"
          title="CMC Regulatory"
          description={
            <ul className="services_description">
              <li>CTD Compilation for New Drug Application</li>
              <li>IMPD/IND Compilation</li>
              <li>Scientific Advice Meeting Assistance</li>
              <li>Pharmaceutical Product Lifecycle Management</li>
            </ul>
          }
        />
      </div>
      <div data-label="Row 2" className="w-full flex flex-col lg:flex-row justify-center gap-5 lg:p-5">
        <Service_Card
          photo="/assets/Images/training.jpg"
          link="/about_us"
          title="Training"
          description={
            <ul className="services_description">
              <li>Quality Culture Training</li>
              <li>cGMP Training</li>
              <li>Risk Based Quality Assurance</li>
              <li>Risk Based Process Validation</li>
              <li>CMC Management & IMPD/IND Writing</li>
              <li>Risk Management Techniques</li>
            </ul>
          }
        />
        <Service_Card
          photo="/assets/Images/recruitment.jpg"
          link="/about_us"
          title="Recruitment"
          description={
            <ul className="services_description">
              <li>
                Recruitment Assistance for Officer, Manager and Director Level
                Positions in the Areas Below
              </li>
              <li>Quality Assurance and Quality Control</li>
              <li>Regulatory Affairs</li>
              <li>Manufacturing</li>
              <li>MS&T and R&D</li>
            </ul>
          }
        />
        <Service_Card empty />
      </div>
    </section>
  );
};

export default Services_Component;
import React from "react";

export interface Service {
  title: string;
  photo: string;
  description: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Quality Management Services",
    photo: "/assets/images/quality.jpg",
    description: (
      <ul className="services_description">
        <li>Vendor Audits</li>
        <li>Mock FDA/TGA/EMA Audits</li>
        <li>Internal Audits</li>
        <li>Risk Management</li>
        <li>FDA Warning Letter (WL) Remediation</li>
      </ul>
    ),
  },
  {
    title: "CMC Advisory",
    photo: "/assets/images/cmc_advisory.jpg",
    description: (
      <ul className="services_description">
        <li>Method Development</li>
        <li>Drug Substance Development</li>
        <li>Drug Product Development</li>
        <li>Stability Planning and Program Management</li>
        <li>CMC Project Management</li>
      </ul>
    ),
  },
  {
    title: "CMC Regulatory",
    photo: "/assets/images/cmc_regulatory.jpg",
    description: (
      <ul className="services_description">
        <li>CTD Compilation for New Drug Application</li>
        <li>IMPD/IND Compilation</li>
        <li>Scientific Advice Meeting Assistance</li>
        <li>Pharmaceutical Product Lifecycle Management</li>
      </ul>
    ),
  },
  {
    title: "Training",
    photo: "/assets/images/training.jpg",
    description: (
      <ul className="services_description">
        <li>Quality Culture Training</li>
        <li>cGMP Training</li>
        <li>Risk Based Quality Assurance</li>
        <li>Risk Based Process Validation</li>
        <li>CMC Management & IMPD/IND Writing</li>
        <li>Risk Management Techniques</li>
      </ul>
    ),
  },
  {
    title: "Recruitment",
    photo: "/assets/images/recruitment.jpg",
    description: (
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
    ),
  },
];

export default services;

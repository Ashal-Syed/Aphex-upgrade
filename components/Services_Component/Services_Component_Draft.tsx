import React from "react";
import Service_Card from "../Service_Card/Service_Card";
import services from "./Services_Data";

const Services_Component = () => {
  const rows = [];
  for (let i = 0; i < services.length; i += 3) {
    rows.push(services.slice(i, i + 3));
  }

  return (
    <div data-label="Full Component" className="w-full min-h-screen p-5">
      <div
        data-label="Heading"
        className="w-full h-[100px] flex flex-col items-center"
      >
        <h1 className="text-heading">Our Services</h1>
        <p className="text-body">
          Discover our range of professional services tailored to meet your
          unique requirements.
        </p>
      </div>

      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          data-label={`Row ${rowIndex + 1}`}
          className="w-full min-h-[500px] flex justify-center gap-5 p-5"
        >
          {row.map((service, i) => (
            <Service_Card
              key={i}
              photo={service.photo}
              title={service.title}
              description={service.description}
            />
          ))}
          {row.length < 3 && <Service_Card empty />}
        </div>
      ))}
    </div>
  );
};

export default Services_Component;

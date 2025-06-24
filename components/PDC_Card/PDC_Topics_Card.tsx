import React from "react";
import Glass_Card from "../Glass_Card/Glass_Card";

const PDC_Topics_Card = () => {
  return (
    <div data-label="Topics" className="h-full w-full lg:w-3/20">
      <Glass_Card
        title="Topics"
        description={
          <ul className="text-left space-y-3 lg:py-5 px-5">
            <li>- Pre-Clinical Development</li>
            <li>- Clinical Development</li>
            <li>- Formulation Development</li>
            <li>- Manufacturing Development</li>
          </ul>
        }
      />
    </div>
  );
};

export default PDC_Topics_Card;

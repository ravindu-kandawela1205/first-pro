import React from "react";
import Bens from "../assets/beneoshop.png";
import capsico from "../assets/caspio.png";
import HyperGrid from "../assets/HyperGrid.png";
import leotrippi from "../assets/leotrippi.png";

function CompanyLogos() {
  return (
    <div>
      <div className="w-full bg-white py-10">
        <div className="text-center mb-8">
          <h2 className="text-lg font-bold text-gray-800 text-[24px]">
            You will be in good Company
          </h2>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-10 md-max-w-auto px-4">
          <img
            src={Bens}
            alt="Beneshop"
            className="h-[185px] w-[185px] object-contain "
          />
          <img
            src={capsico}
            alt="Caspio"
            className="h-[185px] w-[185px]  object-contain"
          />
          <img
            src={HyperGrid}
            alt="Hypergrid"
            className="h-[185px] w-[185px]  object-contain"
          />
          <img
            src={leotrippi}
            alt="Leo Trippi"
            className="h-[185px] w-[185px]  object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default CompanyLogos;

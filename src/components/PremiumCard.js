import React from "react";
import { IndianRupee } from "lucide-react";

function PremiumCard({ plan, selectedPlanID, setSelectedPlanID }) {
  const { name, Offer, Features, duration, price, mrp } = plan;

  return (
    <div
      className={`h-[280px] cursor-pointer relative bg-custom-radial w-[450px]  rounded-2xl  flex  flex-col justify-between ${
        selectedPlanID === plan.ID ? "border-[3px] border-[#A58950]" : " "
      }`}
      onClick={() => setSelectedPlanID((selected) => (selected = plan.ID))}
    >
      <div>
        <span className="absolute right-4 top-3 bg-gold/40 px-2">{Offer}</span>

        <div className="px-5 pt-10">
          <h1 className="text-white font-extrabold text-[25px]">{name}</h1>
          <ul className="text-white/50 font-bold pl-5 list-disc">
            {Features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <div className="flex justify-between items-center px-6">
          <button className="text-gold/80 text-[15px] h-[40px] font-semibold border-gold/60 border px-3 rounded-md">
            {duration}
          </button>

          <div className="mt-4">
            <div className="flex">
              <IndianRupee color="white" />
              <span className="relative -top-2 -left-1 text-white text-[40px] font-extrabold">
                {price}
              </span>
            </div>
            <p className="relative bottom-3 text-gold/70 font-bold text-[20px]">
              <del className="text-white/60 text-[20px]">{mrp}</del> 51% OFF
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PremiumCard;

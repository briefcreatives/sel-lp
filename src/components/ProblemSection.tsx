import { TrendingUp, AlertTriangle, Zap, Car, Sun, Battery, ArrowLeftRight, HandHeart, Wifi, Cloud, Lightbulb, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

const ProblemSection = () => {
  const marketStats = [
    { icon: Sun, label: "PV Systems", value: "9 Millions" },
    { icon: Battery, label: "Storage Units", value: "1.4 Millions" },
    { icon: Zap, label: "Heat Pumps", value: "3 Millions" },
    { icon: Car, label: "Electric Vehicles", value: "40 Millions" }
  ];

  const cardsData = [
  {
    id: 1,
    title: "Connect",
    subtitle: ">99% Uptime on your Asset Portfolio",
    listItems: [
      "Universal Compatibility",
      "Always Connect",
      "Cloud Provider Independence"
    ]
  },
  {
    id: 2,
    title: "Easy Pairing",
    subtitle: "Speed up your Solar battery sales by up to 10%",
    listItems: [
      "Easy Setup"
    ]
  },
  {
    id: 3,
    title: "Home Manager",
    subtitle: "Provide up to 10% bill savings to your customers and unlock new flexibility use cases",
    listItems: [
      "Local Intelligence",
      "Cloud Control",
      "Expand Digital Services"
    ]
  }
];

  return (
    <section className="pb-20 md:pt-36 py:20 bg-background relative">

      <div className="absolute p-5 bg-reef-primary w-full top-0 flex items-start justify-center">
        <span className="text-white text-[16px] font-[500] ">Enlit 2025 18-20 November visit our booth 5.D63 and check our sessions Smart Homes: Catalysts for Renewable Energy Integration, on the 18 th and Energy 4.0 Technologies: IIoT and Cloud on the 19th</span>
      </div>

      <div className="container mx-auto px-6">

        {/* Benefits Grid */}
        <div className="mb-12">
          <h3
            className="text-2xl lg:text-3xl text-center mb-10 font-[500]"
            style={{ color: '#01534f' }}
          >
            Why Choose REEF
          </h3>

          <p className="mb-6 md:px-4">REEF Energy Management redefines how distributed energy resources are deployed and operated. It connects and controls any solar PV, battery, EV or heat pump - no matter the brand - through a robust edge-cloud architecture that works even when the internet doesn’t.</p>

          <p className="text-reef-primary text-[18px] font-semibold md:mb-16 mb-8 md:px-4">By removing cloud dependencies and simplifying installations, REEF helps utilities, EPCs and OEMs scale faster, lower costs, and offer new digital services to their customers.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {cardsData.map((card) => (
              <div key={card.id} className="p-[30px] border border-reef-blue">
                <h2 className="text-reef-primary text-[26px] font-semibold leading-[24px] mb-5">{card.title}</h2>
                <p className="mb-[13px] text-[18px] leading-[26px] font-medium max-w-[282px]">
                  {card.subtitle.includes('>99% Uptime') ? (
                    <>
                      <span className="font-semibold">{card.subtitle.split(' on')[0]}</span>
                      {card.subtitle.slice(card.subtitle.split(' on')[0].length)}
                    </>
                  ) : card.subtitle.includes('battery sales by up to 10%') ? (
                    <>
                      {card.subtitle.split('battery sales by up to 10%')[0]}
                      <span className="font-semibold">battery sales by up to 10%</span>
                      {card.subtitle.split('battery sales by up to 10%')[1]}
                    </>
                  ) : (
                    card.subtitle
                  )}
                </p>
                <ul className="list-disc pl-5">
                  {card.listItems.map((item, index) => (
                    <li key={index} className="mb-1">{item}</li>
                  ))}
                </ul>
              </div>
            ))}



          </div>
        </div>
         <div className="mx-auto flex justify-center">
                <Button
                  onClick={() => {
                    scrollTo({ top: document.getElementById("schedule-demo").offsetTop, behavior: 'smooth' });
                  }}
                  variant="default"
                  size="lg"
                  className="px-12 py-6 text-xl bg-reef-primary text-white mt-4"
                >
                   Book your demo
                </Button>
              </div>

    </div>

    </section >
  );
};

export default ProblemSection;

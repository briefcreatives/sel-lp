import { TrendingUp, AlertTriangle, Zap, Car, Sun, Battery, ArrowLeftRight, HandHeart, Wifi, Cloud, Lightbulb, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";
import arrow1 from "@/assets/arrow_1.svg";

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
    subtitle: "Bring online local storage assets, ensuring seamless communication with the cloud.",
    highlight: ">99% Uptime\non your Asset Portfolio",
    listItems: [
      "Universal Compatibility",
      "Always Connect",
      "Cloud Provider Independence"
    ]
  },
  {
    id: 2,
    title: "Easy Pairing",
    subtitle: "Enable local storage assets installation, breaking physical links between devices.",
    highlight: "Boost your Solar\nbattery sales by up to 10%",
    listItems: [
      "Easy Setup",
      "Higher Conversion Rate"
    ]
  },
  {
    id: 3,
    title: "Home Manager",
    subtitle: "Manage and optimize storage assets to create customer and system value and accelerate heat electrification.",
    highlight: "Provide up to 10% bill\nsavings for your customers and unlock new flexibility use cases",
    listItems: [
      "Local Intelligence",
      "Cloud Control",
      "Expand Digital Services",
      "Enable all-electric installations within power-capacity constraints"
    ]
  }
];

  return (
    <section className="py-20 bg-background">

      <div className="container mx-auto px-6">

        {/* Benefits Grid */}
        <div className="mb-12">
          <h3
            className="text-2xl lg:text-3xl text-center mb-10 font-[500]"
            style={{ color: '#01534f' }}
          >
            Why Choose REEF
          </h3>

          <p className="mb-6 md:px-4 text-center text-[18px]">REEF Energy Management redefines how distributed energy resources are deployed and operated. It connects and controls any solar PV, battery, EV or heat pump - no matter the brand - through a robust edge-cloud architecture that works even when the internet doesn’t.</p>

          <p className="text-black text-[18px] font-[500] md:mb-16 mb-8 md:px-4 text-center">By removing cloud dependencies and simplifying installations, REEF helps utilities, EPCs and OEMs scale faster, lower costs, and offer new digital services to their customers.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {cardsData.map((card) => (
              <div
                key={card.id}
                className="p-[30px] border border-[#76DAD2] rounded-[20px]"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(255, 255, 255, 0.24) 0%, rgba(191, 227, 218, 0.24) 63.94%)",
                }}
              >
                <h2 className="text-reef-primary text-[26px] font-semibold leading-[24px] mb-5">{card.title}</h2>
                <p className="mb-[13px] text-[16px] leading-[22px] font-medium max-w-[282px] whitespace-pre-line">
                  {card.subtitle}
                </p>
                {card.highlight && (
                  <div
                    className="flex px-[15px] py-[8px] justify-center items-center gap-[10px] rounded-[15px] bg-[#0CC6DE] mb-4"
                  >
                    <span
                      className="text-[16px] leading-[22px] font-[500] tracking-[0.48px] text-[#005751] text-center"
                    >
                      {(() => {
                        const s = card.highlight;
                        const bolds = [
                          '>99% Uptime',
                          'battery sales by up to 10%',
                          'Provide up to 10% bill',
                        ];
                        const parts: (string | JSX.Element)[] = [];
                        let idx = 0;
                        while (idx < s.length) {
                          if (s[idx] === '\n') {
                            parts.push(<br key={idx} />);
                            idx++;
                            continue;
                          }
                          let matched = false;
                          for (const b of bolds) {
                            if (s.slice(idx).startsWith(b)) {
                              parts.push(
                                <span key={`b-${idx}`} className="font-[700]">{b}</span>
                              );
                              idx += b.length;
                              matched = true;
                              break;
                            }
                          }
                          if (!matched) {
                            parts.push(s[idx]);
                            idx++;
                          }
                        }
                        return parts;
                      })()}
                    </span>
                  </div>
                )}
               <div className="space-y-3">
                {card.listItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex p-[4px] relative top-1 items-center gap-[5px] rounded-[7px] bg-[#BFE3DA] mr-2 flex-shrink-0">
                      <img src={arrow1} alt="" className="w-2 h-2" />
                    </div>
                    <span className="text-black text-[16px] font-[600] leading-[26px] tracking-[0.42px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
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
                   See it in action
                </Button>
              </div>

    </div>

    </section >
  );
};

export default ProblemSection;

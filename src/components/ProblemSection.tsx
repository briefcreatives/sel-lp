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
    subtitle: "Bring online local storage assets, ensuring seamless communication with the cloud\n>99% Uptime on your Asset Portfolio",
    listItems: [
      "Universal Compatibility",
      "Always Connect",
      "Cloud Provider Independence"
    ]
  },
  {
    id: 2,
    title: "Easy Pairing",
    subtitle: "Enable local storage assets installation, breaking physical links between devices\nBoost your Solar battery sales by up to 10%",
    listItems: [
      "Easy Setup",
      "Higher Conversion Rate"
    ]
  },
  {
    id: 3,
    title: "Home Manager",
    subtitle: "Manage and optimize storage assets to create customer and system value and accelerate heat electrification. \n Provide up to 10% bill savings for your customers and unlock new flexibility use cases",
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

          <p className="mb-6 md:px-4 text-center text-[16px]">REEF Energy Management redefines how distributed energy resources are deployed and operated. It connects and controls any solar PV, battery, EV or heat pump - no matter the brand - through a robust edge-cloud architecture that works even when the internet doesn’t.</p>

          <p className="text-black text-[16px] font-[500] md:mb-16 mb-8 md:px-4 text-center">By removing cloud dependencies and simplifying installations, REEF helps utilities, EPCs and OEMs scale faster, lower costs, and offer new digital services to their customers.</p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            {cardsData.map((card) => (
              <div key={card.id} className="p-[30px] border border-reef-blue">
                <h2 className="text-reef-primary text-[26px] font-semibold leading-[24px] mb-5">{card.title}</h2>
                <p className="mb-[13px] text-[18px] leading-[26px] font-medium max-w-[282px]">
                  {/* Destaca as strings solicitadas em todos os subtitles */}
                  {(() => {
                    let s = card.subtitle;
                    // Array de strings a destacar
                    const highlights = [
                      'Bring online local storage assets,',
                      '>99% Uptime',
                      'Enable local storage assets installation,',
                      'battery sales by up to 10%',
                      'Manage and optimize storage assets',
                      'accelerate heat electrification',
                      'up to 10% bill savings'
                    ];
                    // Função para destacar
                    const parts = [];
                    let idx = 0;
                    while (idx < s.length) {
                      let found = false;
                      for (const h of highlights) {
                        if (s.slice(idx).startsWith(h)) {
                          parts.push(<span className="font-semibold" key={idx}>{h}</span>);
                          idx += h.length;
                          found = true;
                          break;
                        }
                      }
                      if (!found) {
                        parts.push(s[idx]);
                        idx++;
                      }
                    }
                    return parts;
                  })()}
                </p>
               <div className="space-y-3">
                {card.listItems.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-[#0adaea] rounded-full mr-4 mt-2 flex-shrink-0"></div>
                    <span className="text-black text-lg leading-relaxed">
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
                   Book your demo
                </Button>
              </div>

    </div>

    </section >
  );
};

export default ProblemSection;

import React from "react";
import "./OurServices.css";
import { Package, PencilRuler, MonitorSmartphone, Share2 } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Product Packaging Design and Strategy",
    desc: "Crafting captivating designs and strategic solutions to make your products stand out on shelves and in consumers' minds.",
    icon: <Package className="w-6 h-6 text-[#f4a640]" />,
  },
  {
    title: "Branding, Positioning and Strategy",
    desc: "Building strong brand identities, strategically positioning businesses in their market, and devising effective strategies to drive growth and recognition.",
    icon: <PencilRuler className="w-6 h-6 text-[#f4a640]" />,
  },
  {
    title: "Web Dev and UX UI",
    desc: "Creating seamless and visually appealing digital experiences through expert web development and intuitive UX/UI design.",
    icon: <MonitorSmartphone className="w-6 h-6 text-[#f4a640]" />,
  },
  {
    title: "Social Media Creatives",
    desc: "Designing eye-catching and engaging visuals tailored to enhance your brand's presence and engagement across social media platforms.",
    icon: <Share2 className="w-6 h-6 text-[#f4a640]" />,
  },
];

const OurServices = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>

        <p className="services-subtitle">
          We work hard to bring you top-tier creative talent and ensure stellar
          execution until you say – Dude, Thank You!
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {services.map((service, index) => (
            <li key={index} className="min-h-[14rem] list-none">
              <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3">
                <GlowingEffect
                  spread={40}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  borderWidth={3}
                />
                <div className="relative flex h-full flex-col items-center text-center gap-6 overflow-hidden rounded-xl border-[0.75px] border-white/5 bg-[#0a0a0a] p-6 shadow-sm z-10">
                  <div className="relative flex flex-1 flex-col items-center gap-4">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#f4a640]/15 flex items-center justify-center mb-2">
                      {service.icon}
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-[20px] leading-[1.4] font-semibold text-white">
                        {service.title}
                      </h3>
                      <p className="text-[16px] leading-[1.6] text-white/90">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurServices;

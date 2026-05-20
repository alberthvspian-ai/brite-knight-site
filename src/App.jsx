import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  ArrowRight,
  Play,
  ShieldCheck,
  Sparkles,
  CalendarCheck,
  ThumbsUp,
} from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Professional & Reliable", text: "Trained experts you can count on every time." },
  { icon: Sparkles, title: "Attention to Detail", text: "We don’t cut corners. We clean them." },
  { icon: CalendarCheck, title: "On Time, Every Time", text: "We value your time as much as you do." },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", text: "Your satisfaction is our top priority." },
];

const heroImage = "/images/hero-cleaning.jpg";

function Logo() {
  return (
    <a href="#" className="flex items-center">
      <img src="/images/logo.webp" alt="Brite Knight Surface Pros logo" className="h-[88px] w-auto object-contain md:h-[102px]" />
    </a>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#061426] text-white">
      <header className="relative z-50 bg-[#061426]/95 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="border-b border-white/10 bg-[#07182c]">
          <div className="mx-auto flex max-w-[1480px] flex-col gap-3 px-6 py-3 text-sm text-white/90 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-[#f6b800]" />
              <span>Proudly Serving Los Angeles & Surrounding Areas</span>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-8">
              <a href="tel:2137618248" className="flex items-center gap-2 hover:text-[#f6b800]">
                <Phone className="h-5 w-5 text-[#f6b800]" /> (213) 761-8248
              </a>
              <a href="mailto:contact@briteknightsp.com" className="flex items-center gap-2 hover:text-[#f6b800]">
                <Mail className="h-5 w-5 text-[#f6b800]" /> contact@briteknightsp.com
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1480px] items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-10 text-sm font-black uppercase tracking-wide text-white/90 lg:flex">
            <a href="#" className="relative text-[#f6b800] after:absolute after:-bottom-7 after:left-0 after:h-1 after:w-full after:bg-[#f6b800]">Home</a>
            <a href="#about" className="hover:text-[#f6b800]">About Us</a>
            <a href="#services" className="flex items-center gap-1 hover:text-[#f6b800]">Services <ChevronDown className="h-4 w-4" /></a>
            <a href="#projects" className="hover:text-[#f6b800]">Projects</a>
            <a href="#contact" className="hover:text-[#f6b800]">Contact</a>
          </nav>
          <a href="#contact" className="hidden rounded-md bg-[#f6b800] px-8 py-4 text-sm font-black uppercase tracking-wide text-[#061426] shadow-lg shadow-black/30 transition hover:bg-white xl:inline-flex">
            Get a Free Quote
          </a>
        </div>
      </header>

      <main>
        <section className="relative min-h-[760px] overflow-hidden">
          <div className="absolute inset-0">
            <img src={heroImage} alt="Post-construction cleaning team" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#061426] via-[#061426]/86 to-[#061426]/20" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061426] via-transparent to-transparent" />
            <div className="absolute left-0 top-0 h-full w-[65%] bg-[radial-gradient(circle_at_20%_40%,rgba(0,112,180,0.34),transparent_35%)]" />
          </div>

          <div className="relative mx-auto flex min-h-[760px] max-w-[1480px] items-center px-6 py-20">
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="max-w-4xl">
              <h1 className="text-3xl font-black uppercase leading-[1.08] tracking-[-0.035em] text-white drop-shadow-2xl md:text-5xl">
                No Dust, No Debris!
                <span className="mt-2 block whitespace-nowrap text-[#f6b800] md:text-4xl">Here Comes the Brite Knight to set the surface Free!</span>
              </h1>
              <div className="mt-8 h-1.5 w-20 bg-[#f6b800]" />
              <p className="mt-7 max-w-2xl text-xl leading-9 text-white/92">
                Professional cleaning services for homes and businesses. We deliver spotless results with attention to detail and a commitment to excellence.
              </p>
              <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center">
                <a href="#contact" className="inline-flex items-center justify-center gap-4 rounded-md bg-[#f6b800] px-9 py-5 text-base font-black uppercase tracking-wide text-[#061426] shadow-xl shadow-black/35 transition hover:bg-white">
                  Get a Free Quote <ArrowRight className="h-6 w-6" />
                </a>
                <a href="#projects" className="inline-flex items-center gap-4 text-base font-black uppercase tracking-wide text-white hover:text-[#f6b800]">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/85"><Play className="ml-1 h-5 w-5 fill-white" /></span>
                  View Our Work
                </a>
              </div>
            </motion.div>
          </div>

          <div className="relative mx-auto -mt-28 max-w-[1400px] px-6 pb-12">
            <div className="grid overflow-hidden rounded-t-[3rem] bg-[#061426]/96 shadow-2xl shadow-black/40 backdrop-blur-xl md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div key={feature.title} className="flex gap-4 border-white/15 p-8 pl-3 lg:border-r last:border-r-0">
                    <Icon className="h-12 w-12 shrink-0 text-[#f6b800]" />
                    <div className="-ml-3">
                      <h3 className="text-xl font-black uppercase leading-tight tracking-wide">{feature.title}</h3>
                      <p className="mt-3 leading-7 text-white/78">{feature.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

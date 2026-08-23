"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Zap, LayoutGrid, ShieldCheck, Cpu } from "lucide-react";

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-radial-gradient">
      {/* Background glow effects */}
      <div className="absolute top-20 left-10 glow-bg opacity-70" />
      <div className="absolute bottom-10 right-10 glow-bg opacity-50" style={{ transform: "translate(20%, 20%)" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <div className="lg:col-span-7 flex flex-col space-y-8 text-center lg:text-left">
            {/* Tagline */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold text-primary-600 bg-primary-50 dark:text-primary-300 dark:bg-primary-950/50 border border-primary-200/50 dark:border-primary-800/30">
                <Image
                  src="/logo.png"
                  alt="GS Consulting"
                  width={16}
                  height={16}
                  className="w-4 h-4 object-contain rounded-sm"
                />
                Partenaire Digital TPE & PME
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.15]">
              Site web professionnel livré{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-indigo-500">
                rapidement
              </span>{" "}
              pour votre entreprise
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
              {"J'aide les TPE et PME à créer leur présence en ligne ou à développer des outils simples qui font gagner du temps."}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all duration-250 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/35 hover:-translate-y-0.5"
              >
                Demander un devis
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-zinc-800 dark:text-white bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-850 active:bg-zinc-100 dark:active:bg-zinc-800 transition-all duration-250 hover:-translate-y-0.5"
              >
                Me contacter
              </a>
            </div>

            {/* Highlights */}
            <div className="pt-6 border-t border-zinc-200/50 dark:border-zinc-800/30">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-lg mx-auto sm:max-w-none">
                
                {/* Highlight 1 */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">Livraison rapide</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Votre site prêt et en ligne en quelques jours.</p>
                  </div>
                </div>

                {/* Highlight 2 */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400 mt-0.5">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">Sur-mesure</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Zéro code inutile. Adapté à vos besoins réels.</p>
                  </div>
                </div>

                {/* Highlight 3 */}
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-violet-50 dark:bg-violet-950/30 text-violet-600 dark:text-violet-400 mt-0.5">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-zinc-900 dark:text-white text-sm">Zéro risque</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">Vous validez le projet avant le paiement final.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Visual Showcase Column */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            
            {/* Background elements */}
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-primary-400 to-indigo-600 opacity-20 dark:opacity-10 blur-3xl -z-10" />

            {/* Browser Mockup */}
            <div className="relative w-full max-w-[450px] rounded-2xl shadow-2xl border border-zinc-200/60 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-950/70 backdrop-blur-md overflow-hidden aspect-[4/3] flex flex-col">
              
              {/* Browser Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-zinc-100/50 dark:bg-zinc-900/50 border-b border-zinc-200/50 dark:border-zinc-800/50">
                <div className="flex items-center space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-red-400 block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400 block" />
                  <span className="w-3 h-3 rounded-full bg-green-400 block" />
                </div>
                <div className="flex-1 max-w-[200px] mx-auto bg-zinc-200/60 dark:bg-zinc-800/60 text-[10px] text-zinc-500 dark:text-zinc-400 py-1 px-3 rounded-md text-center truncate font-mono">
                  gs-consulting.fr/votre-projet
                </div>
                <div className="w-[30px]" />
              </div>

              {/* Browser Body Mockup */}
              <div className="p-4 flex-1 flex flex-col space-y-4">
                
                {/* Mock UI Header */}
                <div className="flex items-center justify-between">
                  <div className="w-24 h-4 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
                  <div className="flex space-x-2">
                    <div className="w-8 h-3.5 bg-primary-100 dark:bg-primary-950 rounded-md" />
                    <div className="w-12 h-3.5 bg-zinc-200 dark:bg-zinc-800 rounded-md" />
                  </div>
                </div>

                {/* Dashboard Grid Mockup */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="p-3 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/40 rounded-xl flex flex-col space-y-1.5">
                    <div className="w-8 h-2 bg-zinc-300 dark:bg-zinc-700 rounded" />
                    <div className="w-14 h-4 bg-primary-500 dark:bg-primary-600 rounded-md" />
                  </div>
                  <div className="p-3 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/40 rounded-xl flex flex-col space-y-1.5">
                    <div className="w-10 h-2 bg-zinc-300 dark:bg-zinc-700 rounded" />
                    <div className="w-10 h-4 bg-emerald-500 dark:bg-emerald-600 rounded-md" />
                  </div>
                  <div className="p-3 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/40 rounded-xl flex flex-col space-y-1.5">
                    <div className="w-6 h-2 bg-zinc-300 dark:bg-zinc-700 rounded" />
                    <div className="w-12 h-4 bg-violet-500 dark:bg-violet-600 rounded-md" />
                  </div>
                </div>

                {/* Automation mockup line graph */}
                <div className="flex-1 p-3 bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-100 dark:border-zinc-800/40 rounded-xl flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-1">
                    <div className="w-20 h-2.5 bg-zinc-300 dark:bg-zinc-700 rounded" />
                    <div className="w-8 h-2 bg-zinc-200 dark:bg-zinc-800 rounded" />
                  </div>
                  <div className="h-14 flex items-end justify-between space-x-1.5 pt-4">
                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-[20%] rounded-t-sm" />
                    <div className="w-full bg-zinc-200 dark:bg-zinc-800 h-[40%] rounded-t-sm" />
                    <div className="w-full bg-primary-400 dark:bg-primary-500 h-[35%] rounded-t-sm" />
                    <div className="w-full bg-primary-500 dark:bg-primary-600 h-[65%] rounded-t-sm" />
                    <div className="w-full bg-indigo-500 dark:bg-indigo-600 h-[50%] rounded-t-sm" />
                    <div className="w-full bg-indigo-600 dark:bg-indigo-700 h-[85%] rounded-t-sm" />
                    <div className="w-full bg-gradient-to-t from-primary-500 to-indigo-500 h-[95%] rounded-t-sm" />
                  </div>
                </div>

              </div>

              {/* Floating badges overlaying browser */}
              <div className="absolute bottom-6 -left-6 p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-200/50 dark:border-zinc-800/60 flex items-center space-x-2.5 animate-bounce" style={{ animationDuration: "3s" }}>
                <div className="p-2 bg-emerald-500 rounded-lg text-white">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white leading-none">100% Satisfait</h4>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1">Validation avant paiement</p>
                </div>
              </div>

              <div className="absolute top-20 -right-4 p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-xl border border-zinc-200/50 dark:border-zinc-800/60 flex items-center space-x-2.5 animate-pulse">
                <div className="p-2 bg-indigo-500 rounded-lg text-white">
                  <LayoutGrid className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-900 dark:text-white leading-none">Sur mesure</h4>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mt-1">Spécifique à votre métier</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

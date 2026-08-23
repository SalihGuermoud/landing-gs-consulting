"use client";

import React from "react";
import { ShieldCheck, ArrowRight, HeartHandshake, Eye, Sparkles } from "lucide-react";

export default function Trust() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-10 glow-bg opacity-30 -translate-y-1/2" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-tr from-primary-600 via-primary-700 to-indigo-650 p-8 sm:p-12 lg:p-16 text-white shadow-2xl shadow-primary-500/10">
          
          {/* Decorative glowing circles in background */}
          <div className="absolute right-0 top-0 w-80 h-80 rounded-full bg-white/5 blur-2xl pointer-events-none" />
          <div className="absolute left-1/3 bottom-0 w-60 h-60 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left side text column (8 cols) */}
            <div className="lg:col-span-8 flex flex-col space-y-6 text-center lg:text-left">
              {/* Badge */}
              <div className="inline-flex items-center justify-center lg:justify-start">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/10 backdrop-blur-md border border-white/10 text-primary-100">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />
                  Garantie Sérénité
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Vous validez avant le paiement final
              </h2>

              {/* Description */}
              <p className="text-primary-100 font-light text-base sm:text-lg leading-relaxed max-w-2xl">
                {"Je vous présente le résultat avant le règlement du solde afin de m'assurer que le site correspond bien à vos attentes et aux besoins définis ensemble."}
              </p>

              {/* Sub-features */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-y-3 gap-x-6 pt-2">
                <div className="flex items-center space-x-2">
                  <Eye className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs sm:text-sm font-medium text-white/90">Aperçu en ligne réel</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HeartHandshake className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs sm:text-sm font-medium text-white/90">Ajustements inclus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs sm:text-sm font-medium text-white/90">Zéro surprise tarifaire</span>
                </div>
              </div>
            </div>

            {/* Right side CTA/Visual column (4 cols) */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 text-center w-full max-w-[280px] flex flex-col items-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shadow-lg shadow-emerald-500/10">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <span className="text-[11px] font-semibold tracking-wider text-primary-200 uppercase block">Engagement</span>
                  <span className="text-sm font-bold text-white block mt-0.5">Confiance Réciproque</span>
                </div>
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-primary-700 bg-white hover:bg-primary-50 active:bg-primary-100 transition-all duration-200 shadow-md transform hover:-translate-y-0.5"
                >
                  Lancer mon projet
                  <ArrowRight className="w-4 h-4 text-primary-700" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

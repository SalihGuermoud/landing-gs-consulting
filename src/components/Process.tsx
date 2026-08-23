"use client";

import React from "react";
import { MessageSquare, FileText, Code2, CheckSquare, Send } from "lucide-react";

export default function Process() {
  const steps = [
    {
      step: "01",
      icon: <MessageSquare className="w-5 h-5 text-primary-600 dark:text-primary-400" />,
      title: "Échange sur votre besoin",
      description: "Nous discutons simplement de votre activité et de vos défis. Pas de jargon technique complexe : l'objectif est de cerner précisément vos objectifs et vos usages au quotidien.",
    },
    {
      step: "02",
      icon: <FileText className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      title: "Proposition rapide",
      description: "Vous recevez sous 48 heures une proposition claire et un devis forfaitaire détaillé. Vous connaissez dès le départ le budget exact et la date fixée pour la livraison.",
    },
    {
      step: "03",
      icon: <Code2 className="w-5 h-5 text-violet-600 dark:text-violet-400" />,
      title: "Développement",
      description: "Je développe votre site ou outil sur mesure avec des technologies modernes et performantes. Le code est propre, rapide, sécurisé et totalement adapté aux mobiles.",
    },
    {
      step: "04",
      icon: <CheckSquare className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Validation du site",
      description: "Le projet vous est présenté sur un espace de test privé. Vous le manipulez et validez le résultat. Les derniers ajustements sont faits ensemble avant le règlement du solde.",
    },
    {
      step: "05",
      icon: <Send className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
      title: "Mise en ligne",
      description: "Je configure le nom de domaine, l'hébergement sécurisé, et lance le site.",
    },
  ];

  return (
    <section id="processus" className="relative py-20 lg:py-28 overflow-hidden bg-zinc-50/50 dark:bg-zinc-950/20 border-y border-zinc-200/40 dark:border-zinc-800/40">
      {/* Background decoration */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-primary-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30 px-3 py-1 rounded-full border border-primary-200/30 dark:border-primary-800/20">
            Méthodologie
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight mt-4">
            Un processus simple, transparent et sans stress
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-lg font-light leading-relaxed">
            Pour chaque projet, je suis une démarche structurée en 5 étapes pour vous garantir un résultat impeccable et dans les temps.
          </p>
        </div>

        {/* Timeline Desktop & Mobile Grid */}
        <div className="relative">
          {/* Central vertical line on desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-zinc-200 dark:bg-zinc-800 -translate-x-1/2" />

          <div className="space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row ${
                    isEven ? "" : "lg:flex-row-reverse"
                  } relative items-center justify-between group`}
                >
                  {/* Visual Node Dot Indicator */}
                  <div className="absolute left-4 lg:left-1/2 top-6 lg:top-8 w-8 h-8 rounded-full border-4 border-zinc-50 dark:border-zinc-950 bg-white dark:bg-zinc-900 flex items-center justify-center -translate-x-1/2 z-20 group-hover:border-primary-500 transition-colors duration-300 shadow-md">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-400 group-hover:bg-primary-500 transition-colors duration-300" />
                  </div>

                  {/* Content Card (Half width) */}
                  <div className="w-full lg:w-[45%] pl-12 lg:pl-0 flex flex-col justify-center">
                    <div className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 rounded-2xl p-6 sm:p-8 hover:border-primary-500/20 dark:hover:border-primary-500/20 shadow-sm hover:shadow-lg transition-all duration-300">
                      
                      {/* Step Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-zinc-50 dark:bg-zinc-850 rounded-lg border border-zinc-100 dark:border-zinc-850/50 group-hover:scale-105 transition-transform duration-300">
                            {step.icon}
                          </div>
                          <h3 className="font-bold text-lg text-zinc-950 dark:text-white">
                            {step.title}
                          </h3>
                        </div>
                        <span className="font-mono text-3xl font-black text-zinc-200 dark:text-zinc-800">
                          {step.step}
                        </span>
                      </div>

                      {/* Step Description */}
                      <p className="text-sm text-zinc-650 dark:text-zinc-400 font-light leading-relaxed">
                        {step.description}
                      </p>

                    </div>
                  </div>

                  {/* Empty space helper on desktop to align layout */}
                  <div className="hidden lg:block lg:w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

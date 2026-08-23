"use client";

import React from "react";
import { Monitor, RefreshCw, Layers, ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Monitor className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      title: "Création de site sur-mesure",
      description: "Un site unique, ultra rapide et optimisé techniquement pour Google, développé de zéro sans dépendre de templates WordPress lourds ou rigides. Idéal pour asseoir votre crédibilité avec un design moderne et professionnel.",
      tags: ["Code sur-mesure", "Ultra Rapide", "Optimisé SEO"],
      glowColor: "group-hover:shadow-primary-500/10",
    },
    {
      icon: <RefreshCw className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
      title: "Refonte complète (recréation à neuf)",
      description: "Modernisez votre image en repartant sur des bases saines. Plus qu'une simple mise à jour visuelle, je recrée entièrement votre site pour en optimiser le design, l'expérience utilisateur et les performances.",
      tags: ["Repartir de zéro", "Design Moderne", "Performances"],
      glowColor: "group-hover:shadow-indigo-500/10",
    },
    {
      icon: <Layers className="w-6 h-6 text-violet-600 dark:text-violet-400" />,
      title: "Application métier simple",
      description: "Un outil ou tableau de bord sur mesure pour simplifier votre quotidien : gestion des clients, devis, ou suivi d'activité. Une solution légère et intuitive pour dire adieu aux fichiers Excel complexes.",
      tags: ["Base de données", "Outil sur-mesure", "Zéro Excel"],
      glowColor: "group-hover:shadow-violet-500/10",
    },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="relative py-20 lg:py-28 overflow-hidden bg-zinc-50/50 dark:bg-zinc-950/20 border-y border-zinc-200/40 dark:border-zinc-800/40">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-radial-gradient from-primary-500/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30 px-3 py-1 rounded-full border border-primary-200/30 dark:border-primary-800/20">
            Mes Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight mt-4">
            Des solutions sur mesure pour développer votre activité
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-lg font-light leading-relaxed">
            Pas de jargon technique ni de fonctionnalités inutiles. Je développe des solutions efficaces, fluides et centrées sur vos objectifs professionnels.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 shadow-sm hover:shadow-xl ${service.glowColor} hover:-translate-y-1 flex flex-col justify-between`}
            >
              <div>
                {/* Icon wrapper */}
                <div className="inline-flex items-center justify-center p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-850/60 border border-zinc-100 dark:border-zinc-800/50 group-hover:scale-110 group-hover:bg-primary-50 dark:group-hover:bg-primary-950/20 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-zinc-950 dark:text-white mt-6 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 mt-3 text-sm leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Footer details of the card */}
              <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-850/50 flex flex-wrap items-center justify-between gap-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="text-[10px] font-medium text-zinc-500 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800/50 px-2.5 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Action arrow */}
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="text-xs font-semibold text-primary-600 dark:text-primary-400 inline-flex items-center gap-1 hover:gap-1.5 transition-all group-hover:underline"
                >
                  En savoir plus
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

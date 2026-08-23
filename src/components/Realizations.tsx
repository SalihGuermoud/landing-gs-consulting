"use client";

import React from "react";
import { Shield, Check, Users, Receipt, Layout, Award } from "lucide-react";

export default function Realizations() {
  const highlights = [
    "Développement full-stack",
    "Gestion des abonnements",
    "Interface moderne",
    "Projet conçu et développé intégralement",
  ];

  const features = [
    { icon: <Users className="w-4 h-4" />, label: "Gestion des agents & plannings" },
    { icon: <Receipt className="w-4 h-4" />, label: "Suivi administratif & facturation" },
    { icon: <Layout className="w-4 h-4" />, label: "Espace client sécurisé" },
  ];

  return (
    <section id="realisations" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute top-1/3 right-10 glow-bg opacity-30" />
      <div className="absolute bottom-10 left-10 glow-bg opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 lg:mb-20 text-center lg:text-left">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30 px-3 py-1 rounded-full border border-primary-200/30 dark:border-primary-800/20">
            Étude de cas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight mt-4">
            Une réalisation phare : Simply Secu
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-lg font-light leading-relaxed">
            {"Découvrez un exemple concret d'application métier complexe développée sur mesure pour un secteur exigeant."}
          </p>
        </div>

        {/* Case Study Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl shadow-zinc-100/50 dark:shadow-none">
          
          {/* Details Column (6 cols) */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-primary-600 text-white shadow-md shadow-primary-600/25">
                <Shield className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase text-primary-600 dark:text-primary-400 tracking-wider">
                  Plateforme SaaS Métier
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-white">
                  Simply Secu
                </h3>
              </div>
            </div>

            <p className="text-zinc-700 dark:text-zinc-350 text-base leading-relaxed font-light">
              {"Conception et développement complet d'une plateforme SaaS destinée aux entreprises de sécurité privée : gestion des agents, suivi administratif, abonnements, espace client et fonctionnalités métier."}
            </p>

            {/* Features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-2 text-sm text-zinc-650 dark:text-zinc-300">
                  <div className="p-1 rounded-md bg-zinc-100 dark:bg-zinc-850 text-zinc-600 dark:text-zinc-400">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-xs sm:text-sm">{feature.label}</span>
                </div>
              ))}
            </div>

            {/* Highlights Grid (The 4 bullet points) */}
            <div className="border-t border-zinc-150 dark:border-zinc-800/80 pt-6">
              <h4 className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-4">
                Points clés du projet
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2.5">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                    <span className="text-sm text-zinc-800 dark:text-zinc-200 font-semibold">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust badge */}
            <div className="flex items-center space-x-2.5 p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-850/40 border border-zinc-150 dark:border-zinc-800/40">
              <Award className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <span className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                100% conçu et développé par GS Consulting. Aucun intermédiaire.
              </span>
            </div>
          </div>

          {/* Interactive UI Mockup Column (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="w-full rounded-2xl border border-zinc-200/60 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950/60 shadow-xl overflow-hidden aspect-[1.35/1] flex flex-col">
              
              {/* Mock App Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-zinc-900 border-b border-zinc-200/50 dark:border-zinc-800/50">
                <div className="flex items-center space-x-2.5">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-tr from-primary-600 to-indigo-500 flex items-center justify-center">
                    <span className="text-[10px] text-white font-black">S</span>
                  </div>
                  <span className="text-[11px] font-bold text-zinc-900 dark:text-white">Simply Secu</span>
                  <span className="text-[9px] font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 dark:bg-emerald-500/20 px-1.5 py-0.5 rounded">
                    SaaS Actif
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-16 h-2 bg-zinc-200 dark:bg-zinc-800 rounded" />
                  <div className="w-6 h-6 rounded-full bg-zinc-250 dark:bg-zinc-800" />
                </div>
              </div>

              {/* Mock App Body */}
              <div className="p-4 flex-1 flex flex-col space-y-3.5 text-[10px]">
                {/* Upper metrics */}
                <div className="grid grid-cols-3 gap-2.5">
                  <div className="bg-white dark:bg-zinc-900 p-2 rounded-lg border border-zinc-200/40 dark:border-zinc-800/40">
                    <span className="text-zinc-400 dark:text-zinc-500 block">Agents Actifs</span>
                    <span className="text-[13px] font-bold text-zinc-900 dark:text-white">42 agents</span>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-2 rounded-lg border border-zinc-200/40 dark:border-zinc-800/40">
                    <span className="text-zinc-400 dark:text-zinc-500 block">CA Mensuel</span>
                    <span className="text-[13px] font-bold text-primary-600 dark:text-primary-400">12 450 €</span>
                  </div>
                  <div className="bg-white dark:bg-zinc-900 p-2 rounded-lg border border-zinc-200/40 dark:border-zinc-800/40">
                    <span className="text-zinc-400 dark:text-zinc-500 block">Missions</span>
                    <span className="text-[13px] font-bold text-emerald-500">188 ce mois</span>
                  </div>
                </div>

                {/* Table representation */}
                <div className="bg-white dark:bg-zinc-900 flex-1 rounded-lg border border-zinc-200/40 dark:border-zinc-800/40 flex flex-col overflow-hidden">
                  {/* Table headers */}
                  <div className="grid grid-cols-12 gap-1 p-2 bg-zinc-50 dark:bg-zinc-850/50 border-b border-zinc-200/30 dark:border-zinc-800/30 font-semibold text-zinc-500 dark:text-zinc-400">
                    <div className="col-span-5">Agent</div>
                    <div className="col-span-4">Mission</div>
                    <div className="col-span-3 text-right">Statut</div>
                  </div>
                  {/* Table rows */}
                  <div className="flex-1 divide-y divide-zinc-100 dark:divide-zinc-850">
                    <div className="grid grid-cols-12 gap-1 p-2 items-center text-zinc-700 dark:text-zinc-300">
                      <div className="col-span-5 font-medium flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Thomas Moreau</span>
                      </div>
                      <div className="col-span-4 text-zinc-500">Centre Commercial Est</div>
                      <div className="col-span-3 text-right">
                        <span className="text-[8px] bg-emerald-550/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded font-bold">
                          En poste
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-1 p-2 items-center text-zinc-700 dark:text-zinc-300">
                      <div className="col-span-5 font-medium flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>Julie Bernard</span>
                      </div>
                      <div className="col-span-4 text-zinc-500">Sécurisation Entrepôt B</div>
                      <div className="col-span-3 text-right">
                        <span className="text-[8px] bg-emerald-550/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 px-1.5 py-0.5 rounded font-bold">
                          En poste
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-1 p-2 items-center text-zinc-700 dark:text-zinc-300">
                      <div className="col-span-5 font-medium flex items-center space-x-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                        <span>Marc Petit</span>
                      </div>
                      <div className="col-span-4 text-zinc-500">Événementiel Concert</div>
                      <div className="col-span-3 text-right">
                        <span className="text-[8px] bg-yellow-500/10 dark:bg-yellow-500/20 text-yellow-600 dark:text-yellow-400 px-1.5 py-0.5 rounded font-bold">
                          En pause
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Overlapping small subscription card mockup */}
            <div className="absolute -bottom-4 -right-4 p-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800/80 rounded-xl shadow-xl flex items-center space-x-3 w-[180px]">
              <div className="p-2 bg-primary-100 dark:bg-primary-950/60 rounded-lg text-primary-600 dark:text-primary-400">
                <Receipt className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-[10px] font-bold text-zinc-800 dark:text-white truncate leading-none">Stripe Connect</h4>
                <p className="text-[9px] text-zinc-500 dark:text-zinc-400 mt-1 leading-none">Abonnements gérés</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      question: "Combien de temps faut-il pour créer le site ?",
      answer: "Comptez en moyenne 1 à 2 semaines pour un site sur-mesure, et 2 à 4 semaines pour une application métier. Ce délai dépend principalement de la réactivité de nos échanges et de la préparation de vos contenus (textes, images).",
    },
    {
      question: "Quel est le tarif d'un projet ?",
      answer: "Je propose uniquement des tarifs forfaitaires fixes, définis après notre premier échange et détaillés dans le devis. Il n'y a aucun abonnement obligatoire caché ni mauvaise surprise. Les projets débutent généralement avec un acompte à la signature, et le règlement du solde se fait uniquement après votre validation finale du travail.",
    },
    {
      question: "Hébergez-vous le site ou l'application ?",
      answer: "Je ne suis pas hébergeur, mais je m'occupe de toute la mise en place technique pour vous. Nous ouvrons l'hébergement et le nom de domaine à votre nom chez un hébergeur réputé (ex: Hostinger, o2switch, OVH, etc.). De cette façon, vous restez propriétaire à 100% de vos outils et de vos accès de manière sécurisée et indépendante.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-20 lg:py-28 overflow-hidden bg-zinc-50/50 dark:bg-zinc-950/20 border-y border-zinc-200/40 dark:border-zinc-800/40">
      {/* Decoration circle */}
      <div className="absolute bottom-0 right-10 w-[600px] h-[600px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30 px-3 py-1 rounded-full border border-primary-200/30 dark:border-primary-800/20">
            Foire Aux Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight mt-4">
            Des réponses claires à vos questions
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-base sm:text-lg font-light leading-relaxed">
            Pour travailler ensemble en toute confiance, voici les réponses aux questions les plus fréquentes.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle className="w-5 h-5 text-zinc-400 group-hover:text-primary-500 transition-colors flex-shrink-0" />
                    <span className="font-bold text-sm sm:text-base text-zinc-950 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {faq.question}
                    </span>
                  </div>
                  <div className={`p-1 rounded-lg bg-zinc-50 dark:bg-zinc-850 group-hover:bg-primary-50 dark:group-hover:bg-primary-950/50 text-zinc-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-all duration-300 ${
                    isOpen ? "rotate-180 bg-primary-50 dark:bg-primary-950/50 text-primary-600 dark:text-primary-400" : ""
                  }`}>
                    <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                  </div>
                </button>

                {/* Animated Answer height */}
                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    isOpen ? "max-h-[300px] border-t border-zinc-100 dark:border-zinc-850/80" : "max-h-0"
                  }`}
                >
                  <div className="p-5 sm:p-6 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

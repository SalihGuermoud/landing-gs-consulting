"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, ShieldCheck } from "lucide-react";

export default function Footer() {
  const handleScrollTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-zinc-50 dark:bg-zinc-950 border-t border-zinc-200/50 dark:border-zinc-800/60 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-200/50 dark:border-zinc-800/30">
          
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 flex flex-col space-y-4">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="flex items-center space-x-3 group focus:outline-none"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg overflow-hidden group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.png"
                  alt="Logo GS Consulting"
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-bold text-lg text-zinc-950 dark:text-white">
                GS <span className="text-primary-500 font-medium">Consulting</span>
              </span>
            </a>
            <p className="text-sm font-light text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-sm">
              {"Développement web et applications métier. Conception sur-mesure d'outils digitaux modernes, rapides et performants pour les TPE et PME françaises."}
            </p>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="md:col-span-3 flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Plan du site</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" onClick={(e) => handleLinkClick(e, "#services")} className="text-zinc-650 hover:text-primary-600 dark:text-zinc-400 dark:hover:text-primary-400 transition-colors">
                  Nos Services
                </a>
              </li>
              <li>
                <a href="#processus" onClick={(e) => handleLinkClick(e, "#processus")} className="text-zinc-650 hover:text-primary-600 dark:text-zinc-400 dark:hover:text-primary-400 transition-colors">
                  Méthode
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => handleLinkClick(e, "#faq")} className="text-zinc-650 hover:text-primary-600 dark:text-zinc-400 dark:hover:text-primary-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => handleLinkClick(e, "#contact")} className="text-zinc-650 hover:text-primary-600 dark:text-zinc-400 dark:hover:text-primary-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Other Links Column (4 cols) */}
          <div className="md:col-span-4 flex flex-col space-y-4">
            <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Garantie</h4>
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-850/60 flex items-start space-x-3">
              <ShieldCheck className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
              <p className="text-xs text-zinc-500 dark:text-zinc-450 leading-relaxed">
                <span className="font-bold text-zinc-800 dark:text-zinc-200">Zéro risque :</span> {"vous visualisez, testez et validez le travail complet avant d'effectuer le paiement final."}
              </p>
            </div>
          </div>

        </div>

        {/* Sub-footer Section */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-zinc-400 dark:text-zinc-500 text-center sm:text-left">
            <p>© {new Date().getFullYear()} GS Consulting. Tous droits réservés.</p>
            <span className="hidden sm:inline">•</span>
            <a href="/mentions-legales" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors underline">
              Mentions Légales & Confidentialité
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={handleScrollTop}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-xl text-xs font-semibold text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-850/80 hover:bg-zinc-50 dark:hover:bg-zinc-800 shadow-sm cursor-pointer transition-colors"
            aria-label="Retour en haut"
          >
            Retour en haut
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

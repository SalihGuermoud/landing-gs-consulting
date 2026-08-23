import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions Légales | GS Consulting",
  description: "Mentions légales, conditions d'utilisation et politique de confidentialité du site GS Consulting.",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* Back button */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à l'accueil
          </Link>
        </div>

        {/* Title */}
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white">
            Mentions Légales & Confidentialité
          </h1>
          <p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">
            Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}
          </p>
        </div>

        {/* Content sections */}
        <div className="space-y-8 text-sm sm:text-base leading-relaxed font-light text-zinc-700 dark:text-zinc-300">
          
          {/* 1. Éditeur */}
          <section className="space-y-3 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
              1. Éditeur du site
            </h2>
            <p>
              Le site <strong>gs-consulting.fr</strong> est édité par :
            </p>
            <ul className="list-disc list-inside space-y-1.5 text-zinc-600 dark:text-zinc-400">
              <li><strong>Raison sociale :</strong> GS Consulting, micro-entreprise immatriculée au RCS sous le numéro <strong>945 019 693</strong></li>
              <li><strong>Représentant légal / Responsable de la publication :</strong> Le Dirigeant</li>
              <li><strong>Email de contact :</strong> <a href="mailto:gsconsulting.dev@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline">gsconsulting.dev@gmail.com</a></li>
              <li><strong>Téléphone :</strong> 06 29 48 82 03</li>
            </ul>
          </section>

          {/* 2. Hébergement */}
          <section className="space-y-3 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
              2. Hébergement
            </h2>
            <p>
              Le site est hébergé par la société <strong>Vercel Inc.</strong> :
            </p>
            <p className="text-zinc-600 dark:text-zinc-400">
              Vercel Inc.<br />
              440 N Barranca Ave #4133<br />
              Covina, CA 91723<br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 dark:text-primary-400 hover:underline">https://vercel.com</a>
            </p>
          </section>

          {/* 3. Propriété intellectuelle */}
          <section className="space-y-3 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
              3. Propriété intellectuelle
            </h2>
            <p>
              L'ensemble des contenus (textes, graphismes, logos, icônes, code source) présents sur le site <strong>gs-consulting.fr</strong> est la propriété exclusive de GS Consulting, sauf mention contraire. Toute reproduction, distribution ou modification sans accord préalable est strictement interdite.
            </p>
          </section>

          {/* 4. Données personnelles (RGPD) */}
          <section className="space-y-3 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm">
            <h2 className="text-xl font-bold text-zinc-950 dark:text-white">
              4. Protection des données personnelles & Cookies
            </h2>
            <p>
              Les informations recueillies via le formulaire de contact (nom, entreprise, adresse email, numéro de téléphone, message) sont uniquement destinées à permettre à GS Consulting de répondre à vos demandes de devis et de renseignements.
            </p>
            <p>
              Ces données ne sont en aucun cas vendues, cédées ou transmises à des tiers.
            </p>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles en envoyant un email à <a href="mailto:gsconsulting.dev@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline">gsconsulting.dev@gmail.com</a>.
            </p>
            <p>
              Ce site n'utilise aucun traceur publicitaire intrusif nécessitant un consentement par bandeau de cookies.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
}

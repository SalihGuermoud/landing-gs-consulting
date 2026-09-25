import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Mentions légales et confidentialité | GS Consulting",
  description: "Mentions légales et politique de confidentialité de gsconsulting-dev.fr.",
};

export default function MentionsLegales() {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-primary-400 hover:underline"><ArrowLeft className="w-4 h-4" />Retour à l'accueil</Link>
        <div className="border-b border-zinc-200 dark:border-zinc-800 pb-8"><h1 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white">Mentions légales & confidentialité</h1><p className="text-zinc-500 dark:text-zinc-400 mt-2 text-sm">Dernière mise à jour : {new Date().toLocaleDateString("fr-FR")}</p></div>
        <div className="space-y-8 text-sm sm:text-base leading-relaxed font-light text-zinc-700 dark:text-zinc-300">
          <section className="space-y-3 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm"><h2 className="text-xl font-bold text-zinc-950 dark:text-white">1. Éditeur du site</h2><p>Le site <strong>gsconsulting-dev.fr</strong> est édité par :</p><ul className="list-disc list-inside space-y-1.5 text-zinc-600 dark:text-zinc-400"><li><strong>Raison sociale :</strong> GS Consulting, micro-entreprise immatriculée au RCS sous le numéro <strong>945 019 693</strong></li><li><strong>Responsable de la publication :</strong> Le Dirigeant</li><li><strong>Email :</strong> <a href="mailto:gsconsulting.dev@gmail.com" className="text-primary-600 hover:underline">gsconsulting.dev@gmail.com</a></li><li><strong>Téléphone :</strong> 06 29 48 82 03</li></ul></section>
          <section className="space-y-3 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm"><h2 className="text-xl font-bold text-zinc-950 dark:text-white">2. Hébergement</h2><p>Le site est hébergé par Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723. Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">vercel.com</a>.</p></section>
          <section className="space-y-3 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm"><h2 className="text-xl font-bold text-zinc-950 dark:text-white">3. Propriété intellectuelle</h2><p>L'ensemble des contenus présents sur <strong>gsconsulting-dev.fr</strong> est la propriété de GS Consulting, sauf mention contraire.</p></section>
          <section className="space-y-3 bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 shadow-sm"><h2 className="text-xl font-bold text-zinc-950 dark:text-white">4. Données personnelles et cookies</h2><p>Les données envoyées via le formulaire sont utilisées uniquement pour répondre aux demandes de contact et établir un devis. Elles ne sont ni vendues ni cédées.</p><p>Google Analytics est activé uniquement après votre consentement via la bannière affichée en bas de page. Vous pouvez refuser ce service ; dans ce cas, aucun script Google Analytics n'est chargé.</p><p>Vous disposez de droits d'accès, de rectification, d'effacement et d'opposition. Pour les exercer : <a href="mailto:gsconsulting.dev@gmail.com" className="text-primary-600 hover:underline">gsconsulting.dev@gmail.com</a>.</p></section>
        </div>
      </div>
    </div>
  );
}

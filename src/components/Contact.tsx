"use client";

import React, { useState } from "react";
import { Mail, Phone, CheckCircle, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Le nom est requis.";
    if (!formData.company.trim()) newErrors.company = "Le nom de l'entreprise est requis.";
    
    if (!formData.email.trim()) {
      newErrors.email = "L'adresse e-mail est requise.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "L'adresse e-mail est invalide.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Le numéro de téléphone est requis.";
    } else if (!/^[0-9\s.+-]{9,18}$/.test(formData.phone)) {
      newErrors.phone = "Le numéro de téléphone est invalide.";
    }

    if (!formData.message.trim()) newErrors.message = "Veuillez saisir votre message.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus("submitting");
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Une erreur est survenue lors de l'envoi.");
      }

      setStatus("success");
    } catch (err: unknown) {
      console.error("Erreur lors de la soumission du formulaire :", err);
      setStatus("error");
      setServerError(
        err instanceof Error ? err.message : "Une erreur imprévue est survenue. Veuillez réessayer."
      );
    }
  };

  return (
    <section id="contact" className="relative py-20 lg:py-28 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-primary-500/5 blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Info Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-950/30 px-3 py-1 rounded-full border border-primary-200/30 dark:border-primary-800/20 w-fit">
                Contact
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                Discutons de votre projet
              </h2>
              <p className="text-zinc-650 dark:text-zinc-400 text-base sm:text-lg font-light leading-relaxed">
                {"Vous avez besoin d'un site vitrine pour votre activité ou d'un outil sur mesure pour simplifier votre quotidien ?"}
                {" Décrivez votre projet et recevez une réponse sous 48h."}
              </p>

              {/* Direct links */}
              <div className="space-y-4 pt-4">
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800/80 text-primary-600 dark:text-primary-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-450 dark:text-zinc-500 block uppercase font-semibold tracking-wider">Email</span>
                    <a href="mailto:gsconsulting.dev@gmail.com" className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      gsconsulting.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-150 dark:border-zinc-800/80 text-primary-600 dark:text-primary-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-zinc-450 dark:text-zinc-500 block uppercase font-semibold tracking-wider">Téléphone</span>
                    <a href="tel:+33629488203" className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                      06 29 48 82 03
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Quick Guarantees footer */}
            <div className="hidden lg:block pt-8 border-t border-zinc-200/50 dark:border-zinc-800/30 mt-8">
              <p className="text-xs text-zinc-450 dark:text-zinc-500">
                {"En envoyant ce formulaire, vous acceptez d'être recontacté pour l'établissement de votre devis gratuit. Vos données restent confidentielles et ne seront jamais revendues."}
              </p>
            </div>
          </div>

          {/* Form Card Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 rounded-3xl p-6 sm:p-10 shadow-xl shadow-zinc-100/50 dark:shadow-none min-h-[500px] flex flex-col justify-center">
              
              {status === "success" ? (
                /* Success Screen */
                <div className="text-center py-8 space-y-6 animate-in fade-in zoom-in duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shadow-lg shadow-emerald-500/10">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-zinc-950 dark:text-white">
                      Message envoyé !
                    </h3>
                    <p className="text-zinc-600 dark:text-zinc-450 text-sm max-w-md mx-auto leading-relaxed">
                      Merci <span className="font-bold text-zinc-900 dark:text-white">{formData.name}</span>. 
                      Votre demande pour la société <span className="font-bold text-zinc-900 dark:text-white">{formData.company}</span> a bien été reçue. 
                      Je reviens vers vous par e-mail ou téléphone sous 48h.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setStatus("idle");
                      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
                    }}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-200 bg-zinc-50 dark:bg-zinc-850 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                /* Form Display */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="name" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        Votre Nom
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Jean Dupont"
                        className={`px-4 py-3 rounded-xl border bg-zinc-50/50 dark:bg-zinc-950/50 text-zinc-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${
                          errors.name ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
                        }`}
                      />
                      {errors.name && <span className="text-red-500 text-xs font-medium">{errors.name}</span>}
                    </div>

                    {/* Company */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="company" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        Société / Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="GS Consulting"
                        className={`px-4 py-3 rounded-xl border bg-zinc-50/50 dark:bg-zinc-950/50 text-zinc-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${
                          errors.company ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
                        }`}
                      />
                      {errors.company && <span className="text-red-500 text-xs font-medium">{errors.company}</span>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="email" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        Adresse E-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="jean.dupont@entreprise.com"
                        className={`px-4 py-3 rounded-xl border bg-zinc-50/50 dark:bg-zinc-950/50 text-zinc-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${
                          errors.email ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
                        }`}
                      />
                      {errors.email && <span className="text-red-500 text-xs font-medium">{errors.email}</span>}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="phone" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="06 12 34 56 78"
                        className={`px-4 py-3 rounded-xl border bg-zinc-50/50 dark:bg-zinc-950/50 text-zinc-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all ${
                          errors.phone ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
                        }`}
                      />
                      {errors.phone && <span className="text-red-500 text-xs font-medium">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col space-y-2">
                    <label htmlFor="message" className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      Votre projet / besoin
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre besoin : type de site internet, outils internes à développer, délais souhaités..."
                      className={`px-4 py-3 rounded-xl border bg-zinc-50/50 dark:bg-zinc-950/50 text-zinc-950 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/20 focus:border-primary-500 transition-all resize-none ${
                        errors.message ? "border-red-500" : "border-zinc-200 dark:border-zinc-800"
                      }`}
                    />
                    {errors.message && <span className="text-red-500 text-xs font-medium">{errors.message}</span>}
                  </div>

                  {/* Server Error Alert */}
                  {serverError && (
                    <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800/40 text-red-700 dark:text-red-300 text-sm">
                      {serverError}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-xl text-base font-semibold text-white bg-primary-600 hover:bg-primary-700 active:bg-primary-800 transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    {status === "submitting" ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Traitement en cours...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Envoyer ma demande
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

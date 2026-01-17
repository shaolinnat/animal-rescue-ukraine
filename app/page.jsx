"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const content = {
  en: {
    title: "Help Stray Animals in Ukraine",
    description: "We help stray dogs and cats near war zones by providing food, shelter, medical care, and safety.",
    donate: "Donate via PayPal",
    photos: "Rescue Photos",
    transparency: "Transparency & Reports",
  },
  de: {
    title: "Hilfe für streunende Tiere in der Ukraine",
    description: "Wir helfen streunenden Hunden und Katzen in Kriegsgebieten mit Futter, Unterkunft und medizinischer Versorgung.",
    donate: "Über PayPal spenden",
    photos: "Rettungsfotos",
    transparency: "Transparenz & Berichte",
  },
  es: {
    title: "Ayuda para animales callejeros en Ucrania",
    description: "Ayudamos a perros y gatos callejeros cerca de zonas de guerra con comida, refugio y atención médica.",
    donate: "Donar vía PayPal",
    photos: "Fotos de rescate",
    transparency: "Transparencia e informes",
  },
};

export default function DonationWebsite() {
  const [lang, setLang] = useState("en");
  const t = content[lang];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-blue-50 p-6">
      <div className="max-w-3xl mx-auto space-y-8">

        {/* Language Switch */}
        <div className="flex justify-end items-center gap-3 text-sm">
          <span role="img" aria-label="globe">🌐</span>
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("de")}>DE</button>
          <button onClick={() => setLang("es")}>ES</button>
        </div>

        {/* Hero / Donation */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
            <div className="text-center space-y-3">
              <div className="flex justify-center gap-2 text-4xl">
                ❤️ 🐾
              </div>
              <h1 className="text-3xl font-semibold">{t.title}</h1>
              <p className="text-slate-700">{t.description}</p>
            </div>

            <a href="https://www.paypal.com/paypalme/mospasov" target="_blank" rel="noopener noreferrer">
              <button className="w-full h-16 rounded-xl text-lg bg-red-500 text-white font-semibold hover:bg-red-600 transition">
                {t.donate}
              </button>
            </a>
          </div>
        </motion.div>

        {/* Photos Section */}
        <div className="bg-white rounded-2xl shadow p-6 space-y-3">
          <div className="flex items-center gap-2 font-semibold text-lg">
            📷 {t.photos}
          </div>
          <p className="text-sm text-slate-600">Add real rescue photos here (feeding, shelters, medical care, evacuations).</p>
        </div>

        {/* Transparency Section */}
        <div className="bg-white rounded-2xl shadow p-6 space-y-3">
          <div className="flex items-center gap-2 font-semibold text-lg">
            📄 {t.transparency}
          </div>
          <ul className="text-sm text-slate-600 list-disc list-inside">
            <li>Monthly food & medical expenses</li>
            <li>Rescue and shelter reports</li>
            <li>Photo & video proof of aid</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

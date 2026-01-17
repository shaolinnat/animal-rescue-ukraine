"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Heart,
  PawPrint,
  Camera,
  FileText,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const content = {
  en: {
    title: "Help Stray Animals in Ukraine",
    description:
      "We help stray dogs and cats near war zones by providing food, shelter, medical care, and safety.",
    donate: "Donate via PayPal",
    photos: "Rescue Photos",
    transparency: "Transparency & Reports",
  },
  de: {
    title: "Hilfe für streunende Tiere in der Ukraine",
    description:
      "Wir helfen streunenden Hunden und Katzen in Kriegsgebieten mit Futter, Unterkunft und medizinischer Versorgung.",
    donate: "Über PayPal spenden",
    photos: "Rettungsfotos",
    transparency: "Transparenz & Berichte",
  },
  es: {
    title: "Ayuda para animales callejeros en Ucrania",
    description:
      "Ayudamos a perros y gatos callejeros cerca de zonas de guerra con comida, refugio y atención médica.",
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
          <Globe className="w-4 h-4" />
          <button onClick={() => setLang("en")}>EN</button>
          <button onClick={() => setLang("de")}>DE</button>
          <button onClick={() => setLang("es")}>ES</button>
        </div>

        {/* Hero / Donation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="rounded-2xl shadow-lg">
            <CardContent className="p-8 space-y-6">
              <div className="text-center space-y-3">
                <div className="flex justify-center gap-2">
                  <Heart className="w-10 h-10 text-red-500" />
                  <PawPrint className="w-10 h-10 text-amber-600" />
                </div>
                <h1 className="text-3xl font-semibold">{t.title}</h1>
                <p className="text-slate-700">{t.description}</p>
              </div>

              <a
                href="https://www.paypal.com/paypalme/mospasov"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="w-full h-16 rounded-xl text-lg">
                  {t.donate}
                </Button>
              </a>
            </CardContent>
          </Card>
        </motion.div>

        {/* Photos Section */}
        <Card className="rounded-2xl">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center gap-2 font-semibold">
              <Camera /> {t.photos}
            </div>
            <p className="text-sm text-slate-600">
              Add real rescue photos here (feeding, shelters, medical care,
              evacuations).
            </p>
          </CardContent>
        </Card>

        {/* Transparency Section */}
        <Card className="rounded-2xl">
          <CardContent className="p-6 space-y-3">
            <div className="flex items-center gap-2 font-semibold">
              <FileText /> {t.transparency}
            </div>
            <ul className="text-sm text-slate-600 list-disc list-inside">
              <li>Monthly food & medical expenses</li>
              <li>Rescue and shelter reports</li>
              <li>Photo & video proof of aid</li>
            </ul>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}

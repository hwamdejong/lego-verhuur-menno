// LEGO Verhuur – Simpele Site met groene achtergrond en verbeterde mobiele knoppen
"use client";

import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Search, Info, Package } from "lucide-react";
import { motion } from "framer-motion";

const PHONE_RAW = "0645105138"; // getoond op de site
const PHONE_INT = "31645105138"; // voor WhatsApp link (06 -> +31)

const sets = [
  { id: "71720", naam: "NINJAGO – Fire Stone Mech", prijsPerWeek: 10, borg: 25, imageUrl: "https://m.media-amazon.com/images/I/81MT437XcAL.jpg" },
  { id: "71772", naam: "NINJAGO – The Crystal King", prijsPerWeek: 12, borg: 25, imageUrl: "https://i.ebayimg.com/images/g/SMQAAOSw9DxnQXuS/s-l1200.jpg" },
  { id: "71766", naam: "NINJAGO – Lloyd’s Legendary Dragon", prijsPerWeek: 10, borg: 25, imageUrl: "https://m.media-amazon.com/images/I/81TeBf%2BCU2L._AC_UF894%2C1000_QL80_.jpg" },
  { id: "71710", naam: "NINJAGO – Ninja Tuner Car", prijsPerWeek: 9, borg: 25, imageUrl: "https://m.media-amazon.com/images/I/914jn23HT1L._AC_UF894%2C1000_QL80_.jpg" },
  { id: "70673", naam: "NINJAGO – Shuricopter", prijsPerWeek: 9, borg: 25, imageUrl: "https://atlbrick.com/cdn/shop/products/70673-1.png?v=1652383337" },
  { id: "71762", naam: "NINJAGO – Kai’s Fire Dragon EVO", prijsPerWeek: 8, borg: 20, imageUrl: "https://m.media-amazon.com/images/I/81wWym7wJhL.jpg" },
  { id: "71748", naam: "NINJAGO – Catamaran Sea Battle", prijsPerWeek: 10, borg: 25, imageUrl: "https://m.media-amazon.com/images/I/81VFdinfPWL._AC_UF894%2C1000_QL80_.jpg" },
  { id: "70648", naam: "NINJAGO – Zane – Dragon Master", prijsPerWeek: 7, borg: 20, imageUrl: "https://m.media-amazon.com/images/I/A1J8cnpXE-L.jpg" },
];

function formatEUR(n: number) {
  return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(n);
}

const WhatsAppButton: React.FC<{ setId: string; setNaam: string }> = ({ setId, setNaam }) => {
  const msg = encodeURIComponent(`Hoi! Ik wil graag set ${setId} (${setNaam}) huren. Is deze beschikbaar?`);
  const waUrl = `https://wa.me/${PHONE_INT}?text=${msg}`;
  return (
    <Button asChild className="w-full">
      <a href={waUrl} target="_blank" rel="noreferrer">
        <MessageSquare className="mr-2 h-4 w-4" /> Reserveer via WhatsApp
      </a>
    </Button>
  );
};

const BelButton: React.FC = () => (
  <Button asChild variant="secondary" className="w-full">
    <a href={`tel:${PHONE_RAW}`}>
      <Phone className="mr-2 h-4 w-4" /> Bel
    </a>
  </Button>
);

const Hero: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="mx-auto max-w-5xl text-center"
  >
    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Lego Verhuur Menno</h1>
    <p className="mt-4 text-lg text-muted-foreground">Kies je set, stuur een appje, haal op – bouwen maar! Simpel en lokaal.</p>
    <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
      <div className="w-full sm:w-auto">
        <BelButton />
      </div>
      <div className="w-full sm:w-auto">
        <Button asChild className="w-full">
          <a href={`https://wa.me/${PHONE_INT}`} target="_blank" rel="noreferrer">
            <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
          </a>
        </Button>
      </div>
    </div>
  </motion.div>
);

// De rest van je componenten (Filters, SetCard, InfoBox, Footer, enz.) blijven ongewijzigd.

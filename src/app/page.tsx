"use client";

import React, { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageSquare, Search, Info, Package } from "lucide-react";
import { motion } from "framer-motion";

const PHONE_RAW = "0645105138";
const PHONE_INT = "31645105138";

const sets = [
  {
    id: "71720",
    naam: "NINJAGO – Fire Stone Mech",
    prijsPerWeek: 10,
    borg: 25,
    imageUrl: "https://m.media-amazon.com/images/I/81MT437XcAL.jpg",
  },
  {
    id: "71772",
    naam: "NINJAGO – The Crystal King",
    prijsPerWeek: 12,
    borg: 25,
    imageUrl: "https://i.ebayimg.com/images/g/SMQAAOSw9DxnQXuS/s-l1200.jpg",
  },
  {
    id: "71766",
    naam: "NINJAGO – Lloyd’s Legendary Dragon",
    prijsPerWeek: 10,
    borg: 25,
    imageUrl: "https://m.media-amazon.com/images/I/81TeBf%2BCU2L._AC_UF894%2C1000_QL80_.jpg",
  },
  {
    id: "71710",
    naam: "NINJAGO – Ninja Tuner Car",
    prijsPerWeek: 9,
    borg: 25,
    imageUrl: "https://m.media-amazon.com/images/I/914jn23HT1L._AC_UF894%2C1000_QL80_.jpg",
  },
  {
    id: "70673",
    naam: "NINJAGO – Shuricopter",
    prijsPerWeek: 9,
    borg: 25,
    imageUrl: "https://atlbrick.com/cdn/shop/products/70673-1.png?v=1652383337",
  },
  {
    id: "71762",
    naam: "NINJAGO – Kai’s Fire Dragon EVO",
    prijsPerWeek: 8,
    borg: 20,
    imageUrl: "https://m.media-amazon.com/images/I/81wWym7wJhL.jpg",
  },
  {
    id: "71748",
    naam: "NINJAGO – Catamaran Sea Battle",
    prijsPerWeek: 10,
    borg: 25,
    imageUrl: "https://m.media-amazon.com/images/I/81VFdinfPWL._AC_UF894%2C1000_QL80_.jpg",
  },
  {
    id: "70648",
    naam: "NINJAGO – Zane – Dragon Master",
    prijsPerWeek: 7,
    borg: 20,
    imageUrl: "https://m.media-amazon.com/images/I/A1J8cnpXE-L.jpg",
  },
];

function formatEUR(n: number) {
  return new Intl.NumberFormat("nl-NL", { style: "currency", currency: "EUR" }).format(n);
}

const WhatsAppButton: React.FC<{ setId: string; setNaam: string }> = ({ setId, setNaam }) => {
  const msg = encodeURIComponent(
    `Hoi! Ik wil graag set ${setId} (${setNaam}) huren. Is deze beschikbaar?`
  );
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
    <p className="mt-4 text-lg text-white">
      Kies je set, stuur een appje, haal op in Zeist West – bouwen maar! Simpel en lokaal.
    </p>
    <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 w-full px-4">
      <BelButton />
      <Button asChild className="w-full sm:w-auto">
        <a href={`https://wa.me/${PHONE_INT}`} target="_blank" rel="noreferrer">
          <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
        </a>
      </Button>
    </div>
  </motion.div>
);

const Filters: React.FC<{ q: string; setQ: (v: string) => void }> = ({ q, setQ }) => (
  <div className="mx-auto mt-8 max-w-5xl">
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
      <input
        className="w-full rounded-2xl border bg-background py-3 pl-11 pr-4 shadow-sm focus:outline-none focus:ring-2"
        placeholder="Zoek op setnummer of naam…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
    </div>
  </div>
);

const SetCard: React.FC<{ s: (typeof sets)[number] }> = ({ s }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div layout>
      <Card className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition">
        <div className="aspect-[4/3] bg-muted flex items-center justify-center overflow-hidden">
          <img
            src={s.imageUrl}
            alt={`LEGO ${s.id} – ${s.naam}`}
            className="h-full w-full object-contain cursor-pointer"
            onClick={() => setOpen(true)}
            loading="lazy"
          />
        </div>
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-semibold text-lg leading-tight">{s.naam}</h3>
              <p className="text-sm text-muted-foreground">Set #{s.id}</p>
            </div>
            <div className="text-right">
              <div className="font-semibold">{formatEUR(s.prijsPerWeek)}/week</div>
              <div className="text-xs text-muted-foreground">Borg: {formatEUR(s.borg)}</div>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            <WhatsAppButton setId={s.id} setNaam={s.naam} />
            <BelButton />
          </div>
        </CardContent>
      </Card>

      {open && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <img
            src={s.imageUrl}
            alt={`LEGO ${s.id} – ${s.naam}`}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
          />
        </div>
      )}
    </motion.div>
  );
};

const InfoBox: React.FC = () => (
  <div className="mx-auto mt-10 max-w-5xl">
    <Card className="rounded-2xl">
      <CardContent className="p-5 sm:p-6">
        <div className="flex items-start gap-3">
          <Info className="mt-0.5 h-5 w-5" />
          <div className="space-y-2">
            <h3 className="font-semibold text-lg">Hoe werkt het?</h3>
            <ol className="list-decimal pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Kies een set en stuur een WhatsApp-bericht om te reserveren.</li>
              <li>Haal de set op (of lokaal bezorgen in overleg).</li>
              <li>Huurperiode is per week. Verlenging kan in overleg.</li>
              <li>Graag compleet en netjes terugbrengen (controle bij inname).</li>
            </ol>
            <div className="pt-2 text-sm">
              <span className="font-medium">Voorwaarden:</span> borg, vervangingskosten bij missende onderdelen, schoon en rookvrij huis, geen lijm/verf, schade in overleg verrekend.
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);

const Footer: React.FC = () => (
  <footer className="mt-14 pb-10 text-center text-sm text-muted-foreground">
    <div className="flex items-center justify-center gap-2">
      <Package className="h-4 w-4" />
      <span>Particuliere LEGO-verhuur Menno • Bel/WhatsApp: {PHONE_RAW}</span>
    </div>
    <div className="mt-2">© {new Date().getFullYear()} – Alle merknamen en afbeeldingen behoren toe aan hun respectieve eigenaren.</div>
  </footer>
);

export default function LegoVerhuurSite() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return sets;
    return sets.filter((s) => s.id.includes(term) || s.naam.toLowerCase().includes(term));
  }, [q]);

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: "#1faa3f",
        backgroundImage: `
          radial-gradient(#2fd64f 1px, transparent 1px),
          radial-gradient(#2fd64f 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
        backgroundPosition: "0 0, 10px 10px",
        animation: "shine 4s linear infinite",
      }}
    >
      <style>
        {`@keyframes shine {
          0% { filter: brightness(100%); }
          50% { filter: brightness(105%); }
          100% { filter: brightness(100%); }
        }`}
      </style>

      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 bg-background/80 border-b">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/menno.jpg" alt="LEGO" className="h-7 w-7" />
            <span className="font-bold text-lg">Lego Verhuur Menno</span>
          </div>
        </div>
      </header>

      <main className="px-4">
        <section className="py-10">
          <Hero />
          <Filters q={q} setQ={setQ} />
          <div className="mx-auto mt-8 max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((s) => (
              <SetCard key={s.id} s={s} />
            ))}
          </div>
          <InfoBox />
        </section>
      </main>

      <Footer />
    </div>
  );
}

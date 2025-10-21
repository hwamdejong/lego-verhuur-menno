"use client";

import React, { useMemo, useState } from "react";

// *** LITE-VERSIE ZONDER EXTRA BIBLIOTHEKEN ***
// - Geen shadcn/ui nodig (dus geen Button/Card imports)
// - Geen framer-motion nodig
// - Werkt puur met Tailwind classes
// Dit voorkomt build-fouten als shadcn niet (volledig) is ingesteld.

const PHONE_RAW = "0645105138"; // getoond op de site
const PHONE_INT = "31645105138"; // voor WhatsApp link (06 -> +31)

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

export default function Page() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return sets;
    return sets.filter((s) => s.id.includes(term) || s.naam.toLowerCase().includes(term));
  }, [q]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* LEGO studs background */}
      {/* LEGO studs background (emerald green) */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          backgroundColor: '#1B5E20',
          backgroundImage: `
            radial-gradient(circle at 12px 12px, rgba(255,255,255,0.30) 0px, rgba(255,255,255,0.12) 6px, rgba(0,0,0,0.18) 8px, rgba(0,0,0,0.10) 10px, transparent 12px),
            radial-gradient(circle at 24px 24px, rgba(255,255,255,0.30) 0px, rgba(255,255,255,0.12) 6px, rgba(0,0,0,0.18) 8px, rgba(0,0,0,0.10) 10px, transparent 12px),
            linear-gradient(180deg, #2E7D32 0%, #1B5E20 60%, #0F3D13 100%)
          `,
          backgroundSize: '48px 48px, 48px 48px, auto',
          backgroundPosition: '0 0, 24px 24px, 0 0'
        }}
      />

      {/* Subtle moving shine overlay */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0"
        style={{ zIndex: -9, backgroundRepeat: 'no-repeat', backgroundSize: '200% 100%', animation: 'legoShine 16s linear infinite' as any, backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0) 35%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 65%)' }}
      />

      <style>{`
        @keyframes legoShine {
          0% { background-position: -50% 0; }
          100% { background-position: 150% 0; }
        }
      `}</style>
      {/* HEADER */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b">
        <div className="mx-auto max-w-5xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-7 w-7 rounded-full bg-gray-900" aria-hidden />
            <span className="font-bold text-lg">Lego Verhuur Menno</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <a href={`tel:${PHONE_RAW}`} className="px-3 py-2 rounded-xl border text-sm hover:bg-gray-50">Bel {PHONE_RAW}</a>
            <a href={`https://wa.me/${PHONE_INT}`} target="_blank" rel="noreferrer" className="px-3 py-2 rounded-xl bg-gray-900 text-white text-sm hover:opacity-90">WhatsApp</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="px-4 py-10 text-center">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Welkom bij Lego Verhuur Menno</h1>
          <p className="mt-4 text-lg text-gray-600">
            Kies je set, stuur een appje, haal op – bouwen maar! Simpel en lokaal.
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a href={`tel:${PHONE_RAW}`} className="px-4 py-2 rounded-xl border hover:bg-gray-50">Bel {PHONE_RAW}</a>
            <a href={`https://wa.me/${PHONE_INT}`} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-gray-900 text-white hover:opacity-90">WhatsApp</a>
          </div>
        </div>

        {/* ZOEK */}
        <div className="mx-auto mt-8 max-w-5xl">
          <div className="relative">
            <input
              className="w-full rounded-2xl border bg-white py-3 px-4 shadow-sm focus:outline-none focus:ring-2"
              placeholder="Zoek op setnummer of naam…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* SETS GRID */}
      <section className="px-4">
        <div className="mx-auto mt-2 max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((s) => (
            <article key={s.id} className="rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-md transition">
              <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={s.imageUrl}
                  alt={`LEGO ${s.id} – ${s.naam}`}
                  className="h-full w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-lg leading-tight">{s.naam}</h3>
                    <p className="text-sm text-gray-600">Set #{s.id}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold">{formatEUR(s.prijsPerWeek)}/week</div>
                    <div className="text-xs text-gray-600">Borg: {formatEUR(s.borg)}</div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <a
                    href={`https://wa.me/${PHONE_INT}?text=${encodeURIComponent(
                      `Hoi! Ik wil graag set ${s.id} (${s.naam}) huren via Lego Verhuur Menno. Is deze beschikbaar?`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-center px-3 py-2 rounded-xl bg-gray-900 text-white hover:opacity-90"
                  >
                    Reserveer via WhatsApp
                  </a>
                  <a href={`tel:${PHONE_RAW}`} className="text-center px-3 py-2 rounded-xl border hover:bg-gray-50">
                    Bel {PHONE_RAW}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* INFO */}
      <section className="px-4">
        <div className="mx-auto mt-10 max-w-5xl">
          <div className="rounded-2xl border bg-white">
            <div className="p-5 sm:p-6">
              <h3 className="font-semibold text-lg">Hoe werkt het?</h3>
              <ol className="list-decimal pl-5 space-y-1 text-sm text-gray-700 mt-2">
                <li>Kies een set en stuur een WhatsApp-bericht om te reserveren.</li>
                <li>Haal de set op (of lokaal bezorgen in overleg).</li>
                <li>Huurperiode is per week. Verlenging kan in overleg.</li>
                <li>Graag compleet en netjes terugbrengen (controle bij inname).</li>
              </ol>
              <div className="pt-3 text-sm text-gray-700">
                <span className="font-medium">Voorwaarden (suggestie):</span> borg, vervangingskosten bij missende onderdelen, schoon en rookvrij huis, geen lijm/verf, schade in overleg verrekend.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mt-14 pb-10 text-center text-sm text-gray-600">
        <div className="flex items-center justify-center gap-2">
          <span className="inline-block h-4 w-4 bg-gray-900 rounded" aria-hidden />
          <span>Particuliere LEGO-verhuur • Bel/WhatsApp: {PHONE_RAW}</span>
        </div>
        <div className="mt-2">© {new Date().getFullYear()} – Alle merknamen en afbeeldingen behoren toe aan hun respectieve eigenaren.</div>
      </footer>
    </div>
  );
}

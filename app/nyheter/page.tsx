"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Same mock data for the list view
const NEWS_ITEMS = [
    {
        id: 1,
        tag: "Läger",
        tagColor: "bg-scuf-green/10 text-scuf-green",
        title: "Anmälan till Sommarlägret 2026 är öppen!",
        date: "15 Juni - 20 Juni",
        image: "https://loremflickr.com/800/600/summer,camp",
        slug: "/nyheter/sommarlager-2026",
        excerpt: "Häng med på sommarens roligaste vecka! Nu öppnar vi portarna för anmälan."
    },
    {
        id: 2,
        tag: "Recept",
        tagColor: "bg-scuf-yellow/20 text-yellow-700",
        title: "Månadens godaste glutenfria kanelbullar",
        date: "Publicerad: 2 dagar sen",
        image: "https://loremflickr.com/800/600/pastry",
        slug: "/nyheter/recept-kanelbullar",
        excerpt: "Baka saftiga bullar till helgfikat. Vi har hemligheten som gör dem perfekta."
    },
    {
        id: 3,
        tag: "Nyhet",
        tagColor: "bg-scuf-red/10 text-scuf-red",
        title: "Ny medlemsförmån: Rabatt på Fria Bröd",
        date: "Publicerad: Idag",
        image: "https://loremflickr.com/800/600/bakery",
        slug: "/nyheter/medlemsforman",
        excerpt: "Som medlem får du nu 20% rabatt i webbshoppen. Hämta din kod här!"
    },
    {
        id: 4,
        tag: "Event",
        tagColor: "bg-purple-100 text-purple-700",
        title: "Digital pizzakväll med Ungdomsrådet",
        date: "Kommande: 25 Maj",
        image: "https://loremflickr.com/800/600/pizza,party",
        slug: "/nyheter/pizza-kvall",
        excerpt: "Träffa andra ungdomar och snacka om livet, skolan och celiaki."
    }
];

export default function NewsIndexPage() {
    return (
        <main className="min-h-screen bg-neutral-light/30 py-24">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center mb-16 space-y-4">
                    <span className="text-scuf-green font-bold tracking-widest uppercase text-sm">Aktuellt</span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-scuf-dark">
                        Nyheter & Händelser
                    </h1>
                    <p className="text-xl text-scuf-dark/60 max-w-2xl mx-auto">
                        Här samlar vi allt från lägerinbjudningar och recept till viktiga nyheter om celiakiforskning.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {NEWS_ITEMS.map((item, index) => (
                        <Link href={item.slug} key={item.id} className="group">
                            <motion.article
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all border border-neutral-100 h-full flex flex-col"
                            >
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${item.tagColor} backdrop-blur-md`}>
                                        {item.tag}
                                    </div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="text-scuf-dark/40 text-sm font-medium mb-3 flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-scuf-green" />
                                        {item.date}
                                    </div>
                                    <h3 className="text-2xl font-bold text-scuf-dark mb-4 group-hover:text-scuf-green transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-scuf-dark/70 mb-6 flex-grow">
                                        {item.excerpt}
                                    </p>
                                    <div className="flex items-center text-scuf-green font-bold text-sm group-hover:translate-x-2 transition-transform">
                                        Läs hela artikeln
                                        <ArrowRight size={16} className="ml-2" />
                                    </div>
                                </div>
                            </motion.article>
                        </Link>
                    ))}
                </div>

            </div>
        </main>
    );
}

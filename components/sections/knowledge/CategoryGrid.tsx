"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Plane, Utensils, ChevronRight, HeartHandshake, Stethoscope } from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
    {
        icon: BookOpen,
        title: "Vad är celiaki?",
        description: "Allt om symptomen, diagnosen och vad som händer i kroppen.",
        color: "bg-blue-100 text-blue-600",
        href: "/kunskap/om-celiaki"
    },
    {
        icon: GraduationCap,
        title: "Skola & Vardag",
        description: "Rättigheter i skolan, tips för utflykter och hur man pratar med kompisar.",
        color: "bg-orange-100 text-orange-600",
        href: "/kunskap/skola"
    },
    {
        icon: Plane,
        title: "Resa & Nöje",
        description: "Packlistor, parlörer och guider till glutenfria destinationer.",
        color: "bg-scuf-green/10 text-scuf-green",
        href: "/kunskap/resa"
    },
    {
        icon: Utensils,
        title: "Recept & Mat",
        description: "Inspiration till frukost, mellanmål och festmåltider.",
        color: "bg-scuf-yellow/30 text-yellow-700",
        href: "/kunskap/recept"
    },
    {
        icon: Stethoscope,
        title: "Forskning",
        description: "Det senaste inom celiakiforskning och framtidens behandlingar.",
        color: "bg-purple-100 text-purple-600",
        href: "/kunskap/forskning"
    },
    {
        icon: HeartHandshake,
        title: "Leva med celiaki",
        description: "Psykisk hälsa, relationer och att hantera en kronisk diagnos.",
        color: "bg-pink-100 text-pink-600",
        href: "/kunskap/leva"
    }
];

export function CategoryGrid() {
    return (
        <section className="py-12 md:py-20 px-4 md:px-6 bg-white">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {CATEGORIES.map((cat, i) => (
                        <Link href={cat.href} key={i}>
                            <motion.div
                                whileHover={{ y: -5 }}
                                className="group h-full p-8 rounded-3xl border border-neutral-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300"
                            >
                                <div className={`w-14 h-14 rounded-2xl ${cat.color} flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                                    <cat.icon size={28} />
                                </div>
                                <h3 className="text-2xl font-bold text-scuf-dark mb-3 group-hover:text-scuf-green transition-colors flex items-center gap-2">
                                    {cat.title}
                                    <ChevronRight size={20} className="opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all text-scuf-green" />
                                </h3>
                                <p className="text-scuf-dark/60 leading-relaxed font-medium">
                                    {cat.description}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

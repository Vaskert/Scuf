"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export function KnowledgeHero() {
    return (
        <section className="relative px-4 py-20 md:py-32 bg-neutral-green/10 overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-scuf-green/5 rounded-full blur-3xl" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-scuf-yellow/10 rounded-full blur-3xl" />

            <div className="container mx-auto text-center relative z-10 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white text-scuf-green text-sm font-bold shadow-sm mb-6 border border-scuf-green/20">
                        Kunskapsbanken
                    </span>
                    <h1 className="text-4xl md:text-6xl font-extrabold text-scuf-dark mb-6 leading-tight">
                        Allt du behöver veta om <br />
                        <span className="text-scuf-green relative inline-block">
                            celiaki
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-scuf-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6" />
                            </svg>
                        </span>
                        & en glutenfri vardag.
                    </h1>
                    <p className="text-xl text-scuf-dark/70 mb-10 max-w-2xl mx-auto">
                        Här samlar vi guider, tips, forskning och inspiration för dig, din familj och din skola.
                    </p>

                    {/* Search Bar */}
                    <div className="relative max-w-2xl mx-auto shadow-lg rounded-full">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="text-scuf-dark/40" size={24} />
                        </div>
                        <Input
                            type="text"
                            placeholder="Sök efter 'skola', 'resa' eller 'recept'..."
                            className="w-full h-16 pl-14 pr-6 rounded-full text-lg border-2 border-transparent focus:border-scuf-green bg-white shadow-sm transition-all placeholder:text-scuf-dark/30"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, Hash } from "lucide-react";
import Image from "next/image";

export function YouthHero() {
    return (
        <section className="relative min-h-[80vh] md:min-h-[85vh] flex items-center bg-white overflow-hidden py-20 md:py-0">
            {/* SCUF Brand Background Elements */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                {/* Green Organic Shape (Top Right) */}
                <div className="absolute -top-[20%] -right-[10%] w-[70vw] h-[70vw] bg-scuf-green/10 rounded-full blur-3xl" />
                {/* Yellow Accent (Bottom Left) */}
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-scuf-yellow/20 rounded-full blur-3xl opacity-60" />

                {/* Brand Pattern Lines (Subtle) */}
                <svg className="absolute top-20 right-20 w-64 h-64 text-scuf-green/10 opacity-50" viewBox="0 0 100 100">
                    <path d="M0 50 Q 25 25 50 50 T 100 50" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M0 70 Q 25 45 50 70 T 100 70" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Content (6 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-6 space-y-8 text-center md:text-left"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-scuf-green/15 text-scuf-green text-sm font-bold uppercase tracking-wider rounded-full mb-4">
                            <span className="w-2 h-2 rounded-full bg-scuf-green animate-pulse" />
                            SCUF Ungdom
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-scuf-dark tracking-tight leading-[1.1]">
                            Din röst. <br />
                            Ditt utrymme. <br />
                            <span className="relative inline-block text-scuf-green">
                                Din framtid.
                                {/* Underline accent */}
                                <svg className="absolute w-full h-3 bottom-1 left-0 text-scuf-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.8" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-scuf-dark/80 leading-relaxed font-medium max-w-lg">
                            Vi är plattformen för dig som vill påverka, träffa andra eller bara hänga. Ingen press, bara möjligheter att växa.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="rounded-full px-10 text-lg bg-scuf-green hover:bg-scuf-green/90 text-white transition-all shadow-lg shadow-scuf-green/20 h-14 border-b-4 border-emerald-600 active:border-b-0 active:translate-y-1">
                                Häng med oss
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-8 text-lg border-2 border-scuf-dark text-scuf-dark hover:bg-scuf-yellow/20 h-14 bg-transparent font-bold">
                                Läs vårt manifest
                            </Button>
                        </div>

                        {/* Community Avatars / Proof */}
                        <div className="pt-8 flex items-center gap-4">
                            <div className="flex -space-x-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className={`w-12 h-12 rounded-full border-4 border-white bg-neutral-100 overflow-hidden flex items-center justify-center text-xs font-bold text-scuf-dark`}>
                                        {/* Placeholder for faces */}
                                        <div className={`w-full h-full opacity-80 ${i % 2 === 0 ? 'bg-scuf-red/20' : 'bg-scuf-yellow/30'}`} />
                                    </div>
                                ))}
                            </div>
                            <div className="text-sm font-bold text-scuf-dark/60">
                                <span className="text-scuf-dark block text-lg font-extrabold">500+</span>
                                Ungdomar
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Visual (6 cols) - Collage Style */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-6 relative h-[600px] hidden lg:block"
                    >
                        {/* Main Image Card with Brand Border */}
                        <div className="absolute top-10 right-10 w-[400px] h-[500px] bg-white rounded-[2rem] overflow-hidden shadow-2xl rotate-2 transition-transform hover:rotate-1 border-8 border-white">
                            <div className="w-full h-full relative bg-neutral-900">
                                <Image
                                    src="https://loremflickr.com/800/1000/concert,youth"
                                    alt="Lifestyle"
                                    fill
                                    className="object-cover opacity-90"
                                />
                                {/* Duotone Image Effect */}
                                <div className="absolute inset-0 bg-scuf-green/20 mix-blend-multiply z-10" />
                            </div>

                            {/* Badge */}
                            <div className="absolute top-6 right-6 z-20 bg-scuf-red text-white font-bold px-4 py-2 rounded-full text-sm shadow-md">
                                Event
                            </div>
                        </div>

                        {/* Floating Card: Brand Colors */}
                        <div className="absolute top-32 left-8 bg-scuf-yellow text-scuf-dark p-6 rounded-2xl shadow-xl -rotate-3 hover:rotate-0 transition-transform max-w-[220px] border-4 border-white">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mb-3">
                                <span className="text-xl">💬</span>
                            </div>
                            <p className="font-bold text-lg leading-tight">"SCUF gav mig modet att våga resa!"</p>
                        </div>

                        {/* Floating Stat Card */}
                        <div className="absolute bottom-20 left-4 bg-scuf-dark text-white p-5 rounded-2xl shadow-xl rotate-3 hover:rotate-0 transition-transform flex items-center gap-4 border-4 border-white max-w-[260px]">
                            <div className="w-12 h-12 rounded-xl bg-scuf-green flex items-center justify-center shrink-0">
                                <Hash size={24} className="text-white" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-white/50 uppercase tracking-wider">Aktuellt</p>
                                <p className="font-bold text-lg leading-none mt-1">Prisrapporten 2026</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

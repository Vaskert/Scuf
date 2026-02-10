"use client";

import { motion } from "framer-motion";
import { Wheat, Smile, ShieldCheck } from "lucide-react";

export function WhatIsCeliaki() {
    const steps = [
        {
            title: "Kroppen gillar inte gluten",
            text: "Gluten är ett protein som finns i vete, råg och korn. Din mage tycker att gluten är dumt och blir arg om du äter det.",
            icon: Wheat,
            color: "bg-scuf-yellow",
            textColor: "text-yellow-900",
            rotate: "-rotate-3"
        },
        {
            title: "Luddet i magen",
            text: "I din mage finns små snälla 'ludd' som tar hand om maten. Om du äter gluten gömmer sig luddet och då får du ont i magen.",
            icon: ShieldCheck,
            color: "bg-scuf-red",
            textColor: "text-white",
            rotate: "rotate-2"
        },
        {
            title: "Mat är din medicin!",
            text: "Det bästa är att du inte behöver ta sprutor! Du behöver bara äta god mat som inte innehåller gluten (glutenfritt).",
            icon: Smile,
            color: "bg-scuf-green",
            textColor: "text-white",
            rotate: "-rotate-1"
        }
    ];

    return (
        <section className="py-20 bg-white rounded-[4rem] mx-4 md:mx-0 my-8 shadow-sm">
            <div className="container mx-auto px-4 md:px-6">

                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="inline-block py-1 px-4 rounded-full bg-blue-100 text-blue-600 font-bold mb-4 tracking-wider uppercase text-sm">
                        Kortkurs
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-scuf-dark mb-6">
                        Vad är egentligen celiaki? 🧐
                    </h2>
                    <p className="text-xl text-scuf-dark/70 font-medium">
                        Ingen fara, det är inte farligt! Det betyder bara att du är lite extra speciell med maten.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 relative">

                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-10 right-10 h-2 bg-neutral-100 rounded-full border-t-2 border-dashed border-neutral-300 -z-10" />

                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className={`relative p-8 rounded-[2.5rem] ${step.color} ${step.textColor || "text-scuf-dark"} ${step.rotate} hover:rotate-0 transition-transform duration-300 shadow-lg`}
                        >
                            {/* Icon Bubble */}
                            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mx-auto mb-6 transform -translate-y-12 border-4 border-white">
                                <step.icon size={40} className="text-scuf-dark" />
                            </div>

                            <div className="-mt-6 text-center">
                                <h3 className={`text-2xl font-bold mb-4 ${step.textColor}`}>
                                    {step.title}
                                </h3>
                                <p className={`font-medium opacity-90 leading-relaxed ${step.textColor}`}>
                                    {step.text}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

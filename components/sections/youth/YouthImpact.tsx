"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, AlertCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const IMPACT_STATS = [
    {
        id: 1,
        value: "1.5-3x",
        label: "Dyrare mat",
        description: "Glutenfri mat är ofta mångdubbelt dyrare än 'vanlig' mat. Det tycker vi är orättvist.",
        icon: TrendingUp,
        color: "text-scuf-red",
        bgColor: "bg-scuf-red/10"
    },
    {
        id: 2,
        value: "100%",
        label: "Tillgänglighet",
        description: "Vi kämpar för att glutenfritt ska finnas överallt – i skolan, på fiket och i mataffären.",
        icon: Users,
        color: "text-scuf-green",
        bgColor: "bg-scuf-green/10"
    },
    {
        id: 3,
        value: "18 000+",
        label: "Medlemmar",
        description: "Ju fler vi är, desto starkare blir vår röst mot politiker och företag.",
        icon: AlertCircle,
        color: "text-scuf-yellow",
        bgColor: "bg-scuf-yellow/20"
    }
];

export function YouthImpact() {
    return (
        <section className="py-24 bg-scuf-green text-white relative overflow-hidden">
            {/* Background patterns */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

            {/* Decorative shapes */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-scuf-yellow/10 rounded-full blur-3xl -ml-32 -mb-32" />

            <div className="container mx-auto px-4 md:px-6 relative z-10">

                <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block px-3 py-1 bg-white/20 text-white font-bold uppercase tracking-wider text-xs rounded-full mb-4 backdrop-blur-sm border border-white/20">
                            Påverkansarbete
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Vi vägrar acceptera <br />
                            <span className="text-scuf-yellow">
                                orättvisor.
                            </span>
                        </h2>
                        <p className="text-xl text-white/90 leading-relaxed font-light">
                            Att ha celiaki är ingen "livsstilsdiet". Det är en kronisk sjukdom som kostar pengar, energi och tid. SCUF arbetar varje dag för att sänka priserna och öka kunskapen.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-8 border-4 border-white shadow-xl text-scuf-dark transform rotate-1 hover:rotate-0 transition-transform duration-300"
                    >
                        <h3 className="text-xl font-bold mb-4">Årets fokusfråga: Merkostnadsersättning</h3>
                        <p className="text-scuf-dark/70 mb-8 leading-relaxed">
                            Många regioner har tagit bort ersättningen för glutenfri specialkost. Det slår hårt mot unga. Vi driver kampanjen för en nationell, rättvis ersättning.
                        </p>
                        <Button className="w-full bg-scuf-dark hover:bg-scuf-dark/90 text-white font-bold text-lg h-14 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                            Skriv under uppropet <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {IMPACT_STATS.map((stat, index) => (
                        <motion.div
                            key={stat.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-8 rounded-3xl bg-white shadow-lg border-4 border-white/50 hover:border-scuf-yellow transition-all group hover:-translate-y-1 duration-300"
                        >
                            <div className={`w-14 h-14 rounded-xl ${stat.bgColor} ${stat.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <stat.icon size={28} />
                            </div>
                            <div className="text-5xl font-extrabold mb-2 tracking-tight text-scuf-dark">{stat.value}</div>
                            <div className="text-lg font-bold text-scuf-green mb-3">{stat.label}</div>
                            <p className="text-scuf-dark/70 text-sm leading-relaxed">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}

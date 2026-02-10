"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

// Mock Data (in a real app, this would come from a CMS)
const BIG_NEWS_DATA: Record<string, any> = {
    "sommarlager-2026": {
        title: "Anmälan till Sommarlägret 2026 är öppen!",
        date: "15 Juni - 20 Juni",
        image: "https://loremflickr.com/1200/600/summer,camp",
        tag: "Läger",
        content: `
            <p class="mb-4 text-xl font-medium">Äntligen är det dags! Nu öppnar vi anmälan till årets höjdpunkt för alla medlemmar mellan 7-14 år.</p>
            <p class="mb-4">Sommarlägret på Sjöudden är en vecka fylld av bad, lek, nya kompisar och självklart 100% glutenfri mat. Vi har i år utökat antalet platser för att ännu fler ska kunna följa med.</p>
            <h3 class="text-2xl font-bold mt-8 mb-4">Vad händer på lägret?</h3>
            <p class="mb-4">Vi kommer att paddla kanot, ha femkamp, grilla (glutenfritt såklart!) och ha disco sista kvällen. Våra ledare är erfarna och utbildade i celiaki-kunskap.</p>
            <p>Sista anmälningsdag är 31 mars. Först till kvarn gäller!</p>
        `
    },
    "recept-kanelbullar": {
        title: "Månadens godaste glutenfria kanelbullar",
        date: "Publicerad: 2 dagar sen",
        image: "https://loremflickr.com/1200/600/cinnamon,rolls",
        tag: "Recept",
        content: `
            <p class="mb-4 text-xl font-medium">Ingen fika är komplett utan en riktigt saftig kanelbulle. Här är vårt absolut bästa recept som garanterat går hem hos alla.</p>
            <h3 class="text-2xl font-bold mt-8 mb-4">Ingredienser</h3>
            <ul class="list-disc pl-6 mb-6 space-y-2">
                <li>50g jäst</li>
                <li>5dl mjölk (fingervarm)</li>
                <li>150g smör (rumsvarmt)</li>
                <li>1 dl socker</li>
                <li>14 dl glutenfri mjölmix</li>
                <li>2 tsk kardemumma</li>
            </ul>
            <h3 class="text-2xl font-bold mt-8 mb-4">Gör så här</h3>
            <p class="mb-4">1. Smula jästen i en bunke och lös upp med mjölken.</p>
            <p class="mb-4">2. Tillsätt socker, kardemumma, ägg och det mjukare smöret.</p>
            <p class="mb-4">3. Arbeta in mjölmixen lite i taget tills degen är smidig men fortfarande lite kladdig.</p>
            <p>Jäs i 40 minuter, baka ut, och grädda i 250 grader i ca 8 minuter. Njut!</p>
        `
    },
    "medlemsforman": {
        title: "Ny medlemsförmån: Rabatt på Fria Bröd",
        date: "Publicerad: Idag",
        image: "https://loremflickr.com/1200/600/bread,bakery",
        tag: "Nyhet",
        content: `
            <p class="mb-4 text-xl font-medium">Vi är glada att presentera ett nytt samarbete med Fria Bröd!</p>
            <p class="mb-4">Som medlem i SCUF får du nu 20% rabatt på hela sortimentet i deras webbshop. Det gäller allt från limpor och frallor till de goda kladdkakorna.</p>
            <div class="bg-scuf-yellow/20 p-6 rounded-xl border border-scuf-yellow my-8">
                <h4 class="font-bold text-lg mb-2">Din rabattkod:</h4>
                <code class="bg-white px-4 py-2 rounded-lg font-mono text-xl block w-fit">SCUF2026</code>
            </div>
            <p>Logga in på "Mina Sidor" för att läsa mer om hur du använder koden.</p>
        `
    }
};

export default function ArticlePage() {
    const params = useParams();
    const slug = params.slug as string;
    const article = BIG_NEWS_DATA[slug];

    if (!article) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center p-4 text-center">
                <h1 className="text-3xl font-bold text-scuf-dark mb-4">Artikeln hittades inte 😔</h1>
                <Link href="/">
                    <Button>Gå tillbaka hem</Button>
                </Link>
            </div>
        );
    }

    return (
        <article className="min-h-screen bg-neutral-cream/30 pb-24">
            {/* Hero Image */}
            <div className="relative w-full h-[400px] md:h-[500px] bg-scuf-green">
                {/* Image hidden as requested */}
                {/* <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                /> */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Back button moved to content section */}

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white container mx-auto">
                    <span className="inline-block px-3 py-1 bg-scuf-green text-white text-xs font-bold rounded-full mb-4 uppercase tracking-wider">
                        {article.tag}
                    </span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold max-w-4xl drop-shadow-md">
                        {article.title}
                    </h1>
                    <div className="flex items-center gap-6 mt-6 text-white/90 font-medium">
                        <div className="flex items-center gap-2">
                            <Calendar size={18} />
                            {article.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <User size={18} />
                            SCUF Redaktionen
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 md:px-6 mt-12">
                <div className="grid lg:grid-cols-[200px_1fr] gap-8 items-start max-w-5xl mx-auto">

                    {/* Sidebar Back Button (Desktop) */}
                    <div className="hidden lg:block sticky top-24">
                        <Link href="/nyheter">
                            <Button variant="ghost" className="hover:bg-transparent hover:text-scuf-green p-0 font-bold text-scuf-dark/60 transition-colors">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Tillbaka
                            </Button>
                        </Link>
                    </div>

                    {/* Main Article Card */}
                    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-neutral-100">
                        {/* Mobile Back Button */}
                        <div className="lg:hidden mb-6">
                            <Link href="/nyheter">
                                <Button variant="ghost" size="sm" className="-ml-3 text-scuf-dark/60">
                                    <ArrowLeft className="mr-2 h-4 w-4" />
                                    Tillbaka
                                </Button>
                            </Link>
                        </div>

                        <div
                            className="prose prose-lg prose-headings:font-bold prose-headings:text-scuf-dark prose-p:text-scuf-dark/80 prose-a:text-scuf-green hover:prose-a:text-scuf-green/80 focus:prose-a:outline-none"
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </div>
                </div>
            </div>

        </article>
    );
}

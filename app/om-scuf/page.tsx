import { AboutHero, AboutStats, OrganizationMap, TeamSection, ContactSection, AboutContent } from "@/components/sections/about/AboutComponents";

export default function OmScufPage() {
    return (
        <main className="min-h-screen bg-white">
            <AboutHero />
            <AboutStats />
            <AboutContent />
            <TeamSection />
            <OrganizationMap />
            <ContactSection />
        </main>
    );
}

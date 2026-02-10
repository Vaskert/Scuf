import { KnowledgeHero } from "@/components/sections/knowledge/KnowledgeHero";
import { CategoryGrid } from "@/components/sections/knowledge/CategoryGrid";

export default function KunskapPage() {
    return (
        <main className="min-h-screen bg-white">
            <KnowledgeHero />
            <CategoryGrid />
        </main>
    );
}

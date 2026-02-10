import { Content, fetchOneEntry } from "@builder.io/sdk-react-nextjs";
import { notFound } from "next/navigation";

// Builder Public API Key set in .env.local
const BUILDER_PUBLIC_API_KEY = process.env.BUILDER_PUBLIC_API_KEY!;

interface PageProps {
    params: Promise<{
        page: string[];
    }>;
}

export default async function Page(props: PageProps) {
    const urlPath = "/" + (await props.params).page.join("/");

    const content = await fetchOneEntry({
        model: "page",
        apiKey: BUILDER_PUBLIC_API_KEY,
        userAttributes: {
            urlPath: urlPath,
        },
    });

    if (!content) {
        notFound();
    }

    return <Content content={content} apiKey={BUILDER_PUBLIC_API_KEY} model="page" />;
}

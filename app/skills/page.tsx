import { redirect } from "next/navigation";

/** The skills search now lives on the home page; keep old links (and their ?query=) working. */
export default async function SkillsPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
    const { query } = await searchParams;
    const q = Array.isArray(query) ? query[0] : query;
    redirect(q ? `/?q=${encodeURIComponent(q)}` : '/');
}

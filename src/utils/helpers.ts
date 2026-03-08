// src/utils/helpers.ts

export const tagNames: Record<string, string> = {
    politike: "Politikë",
    ekonomi: "Ekonomi",
    showbiz: "Showbiz",
    kronike: "Kronikë",
    sport: "Sport",
    kulture: "Kulturë",
    teknologji: "Teknologji",
    shkence: "Shkencë",
    udhetime: "Udhëtime",
    shendeti: "Shëndeti",
    rajoni: "Rajoni",
    bota: "Bota",
    sociale: "Sociale",
};

export function getDisplayTag(tag: string) {
    if (!tag) return "LAJME";
    return (
        tagNames[tag.trim().toLowerCase()] ||
        tag.charAt(0).toUpperCase() + tag.slice(1)
    );
}

export function getPostUrl(slug: string) {
    const fileName = slug.split('/').pop() || '';
    const cleanSlug = fileName.replace(/\.md$/, '');
    return `/${cleanSlug}/`;
}
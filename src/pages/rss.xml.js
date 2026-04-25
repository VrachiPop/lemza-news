import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
    // 1. Marrim të gjitha lajmet e blogut
    const posts = await getCollection('blog');

    // 2. I rendisim nga më i riu te më i vjetri (Shumë e rëndësishme për Mailchimp)
    posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());

    return rss({
        title: 'Lemza News',
        description: 'Lajme satirike. E vërteta dhemb.',
        site: context.site,
        
        items: posts.map((post) => {
            // Kapim foton (funksionon si me fotot lokale ashtu edhe me linqe të jashtme)
            const imageUrl = post.data.heroImage?.src || post.data.heroImage || '';
            
            // Krijojmë linkun e plotë absolut (psh. https://lemzanews.com/foto.jpg)
            const absoluteImageUrl = imageUrl ? new URL(imageUrl, context.site).toString() : '';

            // Krijojmë bllokun HTML ku ngjisim Foton + Përshkrimin bashkë
            const customContent = `
                ${absoluteImageUrl ? `<img src="${absoluteImageUrl}" alt="${post.data.title}" style="max-width: 100%; border-radius: 8px; margin-bottom: 15px;" />` : ''}
                <p>${post.data.description}</p>
            `;

            return {
                title: post.data.title,
                pubDate: post.data.pubDate,
                link: `/${post.slug}/`,
                // Këtu ndodh magjia: Mailchimp do të lexojë këtë fushë!
                content: customContent,
            };
        }),
        customData: `<language>sq-AL</language>`,
    });
}
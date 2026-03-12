// src/pages/rss.xml.js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  // 1. Marrim të gjitha lajmet dhe i rendisim nga më i riu te më i vjetri
  const posts = await getCollection('blog');
  const sortedPosts = posts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    // Titulli dhe përshkrimi i Feed-it tënd
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    // URL-ja e faqes (merret automatikisht nga astro.config.mjs)
    site: context.site,
    
    // 2. Kthejmë çdo lajm në një "Item" për RSS
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      // KUJDES: Ndrysho pjesën "/blog/" nëse URL-të e tua janë ndryshe (psh. "/lajme/")
      link: `/blog/${post.slug}/`, 
    })),
    
    // Gjuha e portalit
    customData: `<language>sq-AL</language>`,
  });
}
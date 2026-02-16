import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'VrachiPop/lemza-news',
  },
  collections: {
    blog: collection({
      label: 'Lajmet',
      slugField: 'title',
      path: 'src/content/blog/*',
      
      format: { contentField: 'content' },

      // E FSHIMË RRESHTIN 'entryExtension' QË SHKAKTONTE ERRORIN
      
      schema: {
        title: fields.slug({ name: { label: 'Titulli' } }),
        description: fields.text({ label: 'Përshkrimi', multiline: true }),
        pubDate: fields.date({ label: 'Data e Publikimit' }),
        heroImage: fields.image({
          label: 'Fotoja Kryesore',
          directory: 'public/images/blog',
          publicPath: '/images/blog/',
        }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value,
        }),
        content: fields.markdoc({ 
          label: 'Përmbajtja e Lajmit',
          extension: 'md', // Ky rresht siguron që lajmet e reja të krijohen si .md
        }),
      },
    }),
  },
});
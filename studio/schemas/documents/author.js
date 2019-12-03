export default {
  name: 'author',
  type: 'document',
  title: 'Person',
  fields: [
    {
      name: 'identity',
      type: 'person'
    },

  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'slug.current',
      media: 'image'
    }
  }
}

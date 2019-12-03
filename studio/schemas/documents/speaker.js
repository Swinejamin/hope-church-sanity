export default {
  name: 'speaker',
  type: 'document',
  title: 'Speaker',
  fields: [
    {
      name: 'identity',
      type: 'reference',
      to: [{type: 'person'}]
    },

  ],
  preview: {
    select: {

      title: 'identity.name',
      media: 'image'
    }
  }
}
